import { useRef, useState } from "react";

export default function EmployeeForm({ initialEmployee, onSave }) {
  const nameRef = useRef(null);

  const [name, setName] = useState(initialEmployee?.name ?? "");
  const [email, setEmail] = useState(initialEmployee?.email ?? "");
  const [department, setDepartment] = useState(
    initialEmployee?.department ?? "IT"
  );
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      nameRef.current?.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");

    onSave({
      ...(initialEmployee ?? {}),
      name: name.trim(),
      email: email.trim(),
      department,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <input
        ref={nameRef}
        placeholder="Employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Employee email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
      </select>

      {error && <p role="alert">{error}</p>}

      <button type="submit">Save Employee</button>
    </form>
  );
}