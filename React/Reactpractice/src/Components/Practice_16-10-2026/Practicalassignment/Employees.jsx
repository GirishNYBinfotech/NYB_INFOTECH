import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

const EmployeeRow = memo(function EmployeeRow({ emp, onDelete }) {
  return (
    <tr>
      <td>
        <Link to={`/employees/${emp.id}`}>{emp.name}</Link>
      </td>
      <td>{emp.email}</td>
      <td>{emp.department}</td>
      <td>
        <button onClick={() => onDelete(emp.id)}>Delete</button>
      </td>
    </tr>
  );
});

export default function Employees() {
  const { state, dispatch } = useEmployees();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("IT");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);

  const departments = [
    "All",
    "IT",
    "HR",
    "Finance",
    "Marketing",
  ];

  const filteredEmployees = useMemo(
    () =>
      state.employees.filter((emp) => {
        const matchesSearch =
          emp.name.toLowerCase().includes(search.toLowerCase()) ||
          emp.email.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment =
          filter === "All" || emp.department === filter;

        return matchesSearch && matchesDepartment;
      }),
    [state.employees, search, filter]
  );

  function handleSubmit(e) {
    e.preventDefault();

    const employee = {
      id: editId ?? Date.now(),
      name,
      email,
      department,
    };

    dispatch({
      type: editId ? "EDIT_EMPLOYEE" : "ADD_EMPLOYEE",
      payload: employee,
    });

    setName("");
    setEmail("");
    setDepartment("IT");
    setEditId(null);
  }

  function handleEdit(emp) {
    setEditId(emp.id);
    setName(emp.name);
    setEmail(emp.email);
    setDepartment(
      departments.includes(emp.department) ? emp.department : "IT"
    );
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
  }

  return (
    <div>
      <h1>Employees</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Employee email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.slice(1).map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        <button type="submit">
          {editId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <input
        placeholder="Search employees"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {departments.map((dept) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>
                <Link to={`/employees/${emp.id}`}>{emp.name}</Link>
              </td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}