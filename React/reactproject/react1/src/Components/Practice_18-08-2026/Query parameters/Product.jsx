import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams()

  const category = searchParams.get("category")
  const brand = searchParams.get("brand")

  return (
    <div>
      <h1>Products</h1>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
    </div>
  )
}

export default Products