import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Headphones" }
];

function Products() {
  return (
    <>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/products/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Products;