import { useState } from "react";
import Button from "./Button";

export default function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    onAdd({
      id: Date.now(),
      name,
      email,
    });

    setName("");
    setEmail("");
  }

  return (
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

      <Button>Add Employee</Button>
    </form>
  );
}