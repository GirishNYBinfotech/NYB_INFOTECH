import { Link, Outlet } from "react-router-dom";
import EmployeeList from "./EmployeeList";

export default function Employees() {
  return (
    <div>
      <Link to="/dashboard/add-employee">Add Employee</Link>
      <EmployeeList />
      <Outlet />
    </div>
  );
}