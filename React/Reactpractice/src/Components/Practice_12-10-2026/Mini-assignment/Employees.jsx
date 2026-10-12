import { useState } from "react";
import {Link,useNavigate,useParams,useSearchParams} from "react-router-dom";
let nextId = 4;
export const initialEmployees = [
  { id: 1, name: "Ravi Kumar", role: "Developer", salary: 35000 },
  { id: 2, name: "Priya Sharma", role: "Designer", salary: 30000 },
  { id: 3, name: "Arun Kumar", role: "Tester", salary: 28000 },
];

// Dashboard
export function Dashboard({ employees }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div >
        <div >
          <h3>Total Employees</h3>
          <h2>{employees.length}</h2>
        </div>
        <div >
          <h3>Departments</h3>
          <h2>{new Set(employees.map(e => e.role)).size}</h2>
        </div>
      </div>
      <p>Welcome to the Employee Management.</p>
    </div>
  );
}

export function EmployeeList({ employees, deleteEmployee }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredEmployees = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee List</h1>
      <input
        placeholder="Search employee..."
        value={search}
        onChange={e =>
          setSearchParams(
            e.target.value ? { search: e.target.value } : {}
          )
        }
      />

      <p>{search}</p>
      {filteredEmployees.map(e => (
        <div className="card" key={e.id}>
          <h3>{e.name}</h3>
          <p>{e.role} | RS.{e.salary}</p>

          <Link to={`/dashboard/employees/${e.id}`}>
            View Details
          </Link>{" "}
          |{" "}
          <Link to={`/dashboard/edit/${e.id}`}>
            Edit
          </Link>{" "}
          |{" "}
          <button onClick={() => deleteEmployee(e.id)}>
            Delete
          </button>
        </div>
      ))}

      {filteredEmployees.length === 0 && <p>No employees found.</p>}
    </div>
  );
}

// Employee Details: dynamic route and useParams
export function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employee = employees.find(e => e.id === Number(id));

  if (!employee) return <h2>Employee not found</h2>;

  return (
    <div className="card">
      <h1>Employee Details</h1>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: RS.{employee.salary}</p>
      <Link to={`/dashboard/edit/${employee.id}`}>Edit Employee</Link>
    </div>
  );
}

// Reusable Add/Edit Form
export function EmployeeForm({ employees, addEmployee, updateEmployee }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const employee = employees.find(e => e.id === Number(id));
  const [name, setName] = useState(employee?.name || "");
  const [role, setRole] = useState(employee?.role || "");
  const [salary, setSalary] = useState(employee?.salary || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !role.trim() || salary === "" ||
        !Number.isFinite(Number(salary)) || Number(salary) < 0) {
      alert("Enter a valid name, role, and salary.");
      return;
    }

    const data = {
      name: name.trim(),
      role: role.trim(),
      salary: Number(salary),
    };

    if (isEditing) {
      if (!employee) return;
      updateEmployee({ ...employee, ...data });
    } else {
      addEmployee({ id: nextId++, ...data });
    }
    navigate("/dashboard/employees");
  }

  if (isEditing && !employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div className="card">
      <h1>{isEditing ? "Edit Employee" : "Add Employee"}</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <label>Role</label>
        <input
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        />

        <label>Salary</label>
        <input
          type="number"
          min="0"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          required
        />

        <button type="submit">
          {isEditing ? "Update Employee" : "Save Employee"}
        </button>
      </form>
    </div>
  );
}
