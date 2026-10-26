import { memo, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useEmployees from "./useEmployees";

const EmployeeRow = memo(function EmployeeRow({ employee, onDelete }) {
  return (
    <li>
      <Link to={`/dashboard/employees/${employee.id}`}>
        {employee.name}
      </Link>
      {" - "}{employee.email}
      {" - "}{employee.department}
      {" "}
      <button onClick={() => onDelete(employee.id)}>Delete</button>
      {" "}
      <Link to={`/dashboard/employees/${employee.id}/edit`}>
        Edit
      </Link>
    </li>
  );
});

export default function EmployeeList() {
  const { employees, loading, error, deleteEmployee } = useEmployees();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleDelete = useCallback(
    (id) => {
      if (window.confirm("Delete this employee?")) {
        deleteEmployee(id);
      }
    },
    [deleteEmployee]
  );

  const filteredEmployees = useMemo(() => {
    return employees
      .filter((emp) =>
        `${emp.name} ${emp.email}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(
        (emp) =>
          department === "All" || emp.department === department
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [employees, search, department, sortOrder]);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
      <h2>Employee List</h2>

      <input
        placeholder="Search name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
      </select>

      <button
        onClick={() =>
          setSortOrder((order) => order === "asc" ? "desc" : "asc")
        }
      >
        Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>

      <p>Results: {filteredEmployees.length}</p>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
}