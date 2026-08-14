import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 101,
      name: "Pizza",
    },
    {
      id: 102,
      name: "Burger",
    },
    {
      id: 103,
      name: "Biryani",
    }
  ]

  return (
    <div>
      <h1>Food Items</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <Link to={`/products/:id-${product.id},name-  ${product.name}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;