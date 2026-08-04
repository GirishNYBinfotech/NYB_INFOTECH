import { useParams } from "react-router-dom";

const products = [
  { id: "1", name: "Laptop", price: "₹60,000" },
  { id: "2", name: "Mobile", price: "₹25,000" },
  { id: "3", name: "Headphones", price: "₹3,000" }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </>
  );
}

export default ProductDetails;