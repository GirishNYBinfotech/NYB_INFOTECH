import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Employees from "./Employees";
import EmployeeDetails from "./EmployeeDetails";
import About from "./About";

function EMP() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />}/> |
          {/* Dynamic route */}
          <Route  path="/employees/:id" element={<EmployeeDetails />}/> |
          <Route path="/about" element={<About />} /> |
          <Route path="*"  element={<h2>404 - Page Not Found</h2>}/>
        </Routes>
      </div>
    </>
  );
}

export default EMP;
