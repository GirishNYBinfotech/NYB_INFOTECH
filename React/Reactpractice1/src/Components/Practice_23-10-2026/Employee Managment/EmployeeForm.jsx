import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployees } from "./UseEmployee";

export default function EmployeeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useEmployees();
  const isEdit = Boolean(id);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "IT",
    salary: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      const employee = state.employees.find(
        emp => emp.id === id
      );

      if (employee) {
        setForm({
          name: employee.name,
          email: employee.email,
          department: employee.department,
          salary: String(employee.salary)
        });
      } else {
        setError("Employee not found.");
      }
    }
  }, [id, isEdit, state.employees]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }

    if (form.salary === "" || Number(form.salary) < 0) {
      setError("Please enter a valid salary.");
      return;
    }

    const employee = {
      ...form,
      id: id || String(Date.now()),
      salary: Number(form.salary)
    };

    dispatch({
      type: isEdit ? "UPDATE" : "ADD",
      payload: employee
    });

    navigate("/employees");
  }

  return (
    <div>
      <h2>{isEdit ? "Edit Employee" : "Add Employee"}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <br /><br />

        <input
          name="salary"
          type="number"
          min="0"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          {isEdit ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}