import { react,useState } from "react";

function ProductForm({
  onAdd,
  onUpdate,
  selectedProduct,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const product = {
      id: selectedProduct
        ? selectedProduct.id
        : Date.now(),

      name,
      price,
      category,
    };

    if (selectedProduct) {
      onUpdate(product);
    } else {
      onAdd(product);
    }

    setName("");
    setPrice("");
    setCategory("");
  }

  return (
    <div>
      <h2>
        {selectedProduct
          ? "Edit Product"
          : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">
          {selectedProduct
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;