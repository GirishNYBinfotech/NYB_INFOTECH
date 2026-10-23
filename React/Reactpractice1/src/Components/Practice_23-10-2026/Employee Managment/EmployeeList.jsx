import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "./UseEmployee";

export default function EmployeeList() {
  const { state, dispatch } = useEmployees();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>Error: {error}</p>;
  const filteredEmployees = state.employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || emp.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div>
      <h2>Employee List</h2>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={e => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      <ul>
        {filteredEmployees.map(emp => (
          <li key={emp.id}>
            {emp.name} — {emp.department} — Rs.{emp.salary}{" "}
            <Link to={`/employees/${emp.id}`}> Details</Link>{" "}
            <Link to={`/employees/edit/${emp.id}`}>Edit</Link>{" "}

            <button
              onClick={() => {
                if (window.confirm("Delete this employee?")) {
                  dispatch({
                    type: "DELETE",
                    payload: emp.id
                  });
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {filteredEmployees.length === 0 && (
        <p>No employees found.</p>
      )}

      <Link to="/employees/add">Add New Employee</Link>
    </div>
  );
}