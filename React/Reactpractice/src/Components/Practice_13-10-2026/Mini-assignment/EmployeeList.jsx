import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeList() {
  const {
    employees,
    updateEmployee,
    deleteEmployee,
    updateStatus
  } = useContext(EmployeeContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEmployees = employees.filter(emp => {
    const matchesName = emp.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      filter === "All" || emp.status === filter;

    return matchesName && matchesStatus;
  });

  return (
    <div>
      <h2>Employee List</h2>

      <input
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Employees</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {filteredEmployees.map(emp => (
        <div key={emp.id}>
          <span>
            {emp.name} - {emp.status}
          </span>{" "}

          <button
            onClick={() => {
              const newName = prompt("Enter new name", emp.name);
              if (newName !== null) {
                updateEmployee(emp.id, newName);
              }
            }}
          >
            Edit
          </button>

          <button onClick={() => deleteEmployee(emp.id)}>
            Delete
          </button>

          <button onClick={() => updateStatus(emp.id)}>
            Update Status
          </button>
        </div>
      ))}

      {filteredEmployees.length === 0 && (
        <p>No employees found.</p>
      )}
    </div>
  );
}