import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function Dashboard() {
  const { state, dispatch } = useEmployees();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load employees");
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_EMPLOYEES",
          payload: data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            department: user.company.name,
          })),
        });
      })
      .catch(() => setError("Could not load employee data"))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total employees: {state.employees.length}</p>
      <Link to="/employees">Manage Employees</Link>
    </div>
  );
}