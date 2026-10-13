import { useState } from "react";

function Usestate() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  function addEmployee() {
    if (!name || !salary || !department) {
      setError("Please fill all fields");
      return;
    }

    setEmployees([
      ...employees,
      { id: Date.now(), name, salary, department }
    ]);

    setName("");
    setSalary("");
    setDepartment("");
    setError("");
  }

  return (
    <div>
      <h2>Employee Management</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={addEmployee}>Add Employee</button>

      {error && <p>{error}</p>}

      {employees.map((emp) => (
        <p key={emp.id}>
          {emp.name} - {emp.salary} - {emp.department}
        </p>
      ))}
    </div>
  );
}

export default Usestate;