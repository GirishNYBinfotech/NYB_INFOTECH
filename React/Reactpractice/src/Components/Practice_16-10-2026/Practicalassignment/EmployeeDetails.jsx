import { Link, useParams } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { state } = useEmployees();

  const employee = state.employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) return <p>Employee not found.</p>;

  return (
    <div>
      <h1>Employee Details</h1>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>
      <Link to="/employees">Back to Employees</Link>
    </div>
  );
}