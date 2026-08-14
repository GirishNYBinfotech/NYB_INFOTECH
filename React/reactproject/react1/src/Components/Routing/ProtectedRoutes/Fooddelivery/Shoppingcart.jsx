import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Orders from "./Orders";
import ProtectedRoute from "./ProtectedRoute";

function Shoppingcart() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/orders">Orders</Link>
      </nav>

      <hr />

      <Routes>

        {/* Normal Route */}
        <Route path="/" element={<Home />}/>

        {/* Normal Route */}
        <Route path="/products" element={<Products />}/>

        {/* Dynamic Route */}
        <Route path="/products/:productId" element={<ProductDetails />}/>

        {/* Login */}
        <Route path="/login" element={<Login />}
        />

        {/* Protected Route */}
        <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default Shoppingcart