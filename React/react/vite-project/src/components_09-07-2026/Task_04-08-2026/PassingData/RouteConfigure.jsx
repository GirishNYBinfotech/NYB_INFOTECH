import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import Details from "./Details";

function RouteConfigure() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default RouteConfigure