import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeForm() {
  const { dispatch } = useContext(EmployeeContext);
  const [name, setName] = useState("");

  function addEmployee() {
    if (!name.trim()) return;

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: Date.now(),
        name: name.trim(),
      },
    });

    setName("");
  }

  return (
    <div>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addEmployee}>
        Add Employee
      </button>
    </div>
  );
}