import { Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import ProductDetails from "./Productdetails";

function Product() {
  return (
    <>
    <h4>Click here to load products</h4>
      <nav>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        {/* Normal Route */}
        <Route path="/products" element={<Products/>} />
        {/* Dynamic Route */}
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      </>
  );
}

export default Product