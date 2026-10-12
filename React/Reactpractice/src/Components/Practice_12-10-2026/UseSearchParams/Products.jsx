import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeCategory() {
    setSearchParams({
      category: "laptop",
      price: "50000"
    });
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Category: {searchParams.get("category")}</p>
      <p>Category: {searchParams.get("price")}</p>
      <button onClick={changeCategory}>
        Show Laptops
      </button>
    </div>
  );
}

export default Products;