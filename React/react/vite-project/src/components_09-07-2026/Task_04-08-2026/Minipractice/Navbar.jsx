import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/services">Services</NavLink> |{" "}
      <NavLink to="/contact">Contact</NavLink> |{" "}
      <NavLink to="/products">Products</NavLink> |{" "}
      <NavLink to="/dashboard">Dashboard</NavLink>
      <hr />
    </>
  );
}

export default Navbar;