import { Link } from "react-router-dom";
import { useEmployees } from "./UseEmployee";

export default function Dashboard() {
  const { state, user } = useEmployees ();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}</p>
      <h3> Total Employees: {state.employees.length}</h3>
      <Link to="/employees">View Employees</Link>
    </div>
  );
}