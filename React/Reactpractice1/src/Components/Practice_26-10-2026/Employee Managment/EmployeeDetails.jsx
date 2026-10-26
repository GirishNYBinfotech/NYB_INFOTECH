import { Link, useParams } from "react-router-dom";
import useEmployees from "./useEmployees";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { employees, loading } = useEmployees();

  if (loading) return <p>Loading employee...</p>;

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) return <p>Employee not found.</p>;

  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>

      <Link to={`/dashboard/employees/${employee.id}/edit`}>
        Edit Employee
      </Link>
    </div>
  );
}