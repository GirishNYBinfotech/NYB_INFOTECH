import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getCategories, getProducts } from "./ProductApi";

function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://dummyjson.com/products";

  useEffect(() => {
    async function loadData() {
      try {
        const [productData, categoryData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        setProducts(productData.products);
        setCategories(categoryData);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  async function saveProduct(e) {
    e.preventDefault();

    const product = {
      title: title.trim(),
      price: Number(price),
    };

    if (!product.title || price === "" || product.price < 0) {
      alert("Enter a valid name and price");
      return;
    }

    try {
      const res = await fetch(
        editId ? `${API}/${editId}` : `${API}/add`,
        {
          method: editId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (!res.ok) throw new Error();

      const data = await res.json();

      if (editId) {
        setProducts((old) =>
          old.map((p) => p.id === editId ? { ...p, ...data } : p)
        );
      } else {
        setProducts((old) => [
          { ...data, id: data.id ?? Date.now() },
          ...old,
        ]);
      }

      setTitle("");
      setPrice("");
      setEditId(null);
      setError("");
    } catch {
      setError("Unable to save product");
    }
  }

  function editProduct(p) {
    setTitle(p.title);
    setPrice(String(p.price));
    setEditId(p.id);
    setSelected(null);
  }

  async function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();

      setProducts((old) => old.filter((p) => p.id !== id));
      setSelected(null);
    } catch {
      setError("Unable to delete product");
    }
  }

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || p.category === category)
  );

  if (loading) return <h2>Loading products...</h2>;

  if (error && products.length === 0) {
    return (
      <div>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Management</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <h2>{editId ? "Edit Product" : "Add Product"}</h2>

      <form onSubmit={saveProduct}>
        <input
          placeholder="Product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">{editId ? "Update" : "Add"}</button>

        {editId && (
          <button type="button" onClick={() => {
            setEditId(null);
            setTitle("");
            setPrice("");
          }}>
            Cancel
          </button>
        )}
      </form>

      {selected ? (
        <div>
          <h2>{selected.title}</h2>
          <img src={selected.thumbnail} alt={selected.title} width="150" />
          <p>Price: ${selected.price}</p>
          <p>Category: {selected.category}</p>
          <p>{selected.description}</p>
          <button onClick={() => setSelected(null)}>Back</button>
        </div>
      ) : (
        <ProductList
          products={filtered}
          onDetails={setSelected}
          onEdit={editProduct}
          onDelete={deleteProduct}
        />
      )}
    </div>
  );
}

export default Product;
