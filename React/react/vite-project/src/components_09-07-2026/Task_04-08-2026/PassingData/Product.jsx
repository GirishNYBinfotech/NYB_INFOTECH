import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const product = {
    id: 101,
    name: "Laptop",
    price: 55000,
  };

  return (
    <button onClick={() =>navigate("/details", { state: product })}>View Product</button>
  )
}

export default Product;