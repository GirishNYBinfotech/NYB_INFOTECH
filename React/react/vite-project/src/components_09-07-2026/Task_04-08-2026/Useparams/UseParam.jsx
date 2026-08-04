import { Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";

function Useparam() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList/>} />
      <Route path="/employees/:id" element={<EmployeeDetails/>} />
    </Routes>
  );
}

export default Useparam