import { Link, useParams } from "react-router-dom";
import { useEmployees } from "./UseEmployee";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { state } = useEmployees();

  const employee = state.employees.find(
    emp => emp.id === id
  );

  if (!employee) {
    return <p>Error: Employee not found.</p>;
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: Rs.{employee.salary}</p>

      <Link to={`/employees/edit/${employee.id}`}>
        Edit Employee
      </Link>
    </div>
  );
}