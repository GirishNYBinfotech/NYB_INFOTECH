import { useState } from "react";

export default function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("IT");
  const [error, setError] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  if (!name.trim() || !email.trim()) {
    setError("Name and email are required.");
    return;
  }

  onAddEmployee({
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    department
  });

  setName("");
  setEmail("");
  setDepartment("IT");
  setError("");
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Add Employee</button>
    </form>
  );
}