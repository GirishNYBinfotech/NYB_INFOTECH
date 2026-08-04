import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";

function MainApps() {
  return (
    <>
    <h2>Application</h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainApps;