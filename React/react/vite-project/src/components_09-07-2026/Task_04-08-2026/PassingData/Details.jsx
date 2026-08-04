import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const product = location.state;
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: Rs.{product.price}</p>
    </div>
  );
}

export default Details;