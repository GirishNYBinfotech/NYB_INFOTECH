import { Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import Orders from "./Orders";
import Account from "./Accounts";

function Shopping() {
  return (
    <div>
      <h1>Online Shopping</h1>

      <nav>
        <Link to="/">Products</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/orders">Orders</Link> |{" "}
        <Link to="/account">Account</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default Shopping