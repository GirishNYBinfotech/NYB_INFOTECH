import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/products/101">Laptop</Link>
      <br />
      <Link to="/products/202">Mobile</Link>
    </div>
  );
}

export default Products;