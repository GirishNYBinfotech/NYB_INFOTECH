import { Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export default function MainApp() {
  return (
    <>
    <h2>Roting Configuration</h2>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <AppRoutes />
    </>
  );
}