import { Link, Outlet } from "react-router-dom";
import useEmployees from "./useEmployees";

export default function Dashboard() {
  const { employees } = useEmployees();

  return (
    <div>
      <h1>Employee Management Dashboard</h1>

      <p>Total Employees: {employees.length}</p>

      <nav>
        <Link to="/dashboard">Home</Link>{" "}
        <Link to="/dashboard/employees">Employees</Link>{" "}
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </nav>
      <Outlet />
    </div>
  );
}