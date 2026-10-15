import { useState } from "react";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import useProducts from "./Useproduct";

function ProductPage() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddToCart(product) {
    console.log("Added to cart:", product.title);
  }

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <h1>Products</h1>

      <ProductSearch
        search={search}
        onSearchChange={setSearch}
      />

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}

export default ProductPage;