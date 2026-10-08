import react,{ useState } from "react";

function APISF() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Mobile", category: "Electronics" },
    { id: 3, name: "Shirt", category: "Clothing" },
    { id: 4, name: "Shoes", category: "Clothing" },
    { id: 5, name: "Book", category: "Books" }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  })

  return (
    <div>
      <h2>Product List</h2>
      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>

      {/* Display Results */}
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  )
}

export default APISF