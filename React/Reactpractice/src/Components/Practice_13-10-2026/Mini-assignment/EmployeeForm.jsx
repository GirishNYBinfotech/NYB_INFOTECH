import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeForm() {
  const { addEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee name"
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}