
import React, { useReducer, useState } from "react";

// Initial state
const initialState = [
  { id: 1, name: "Girish" },
  { id: 2, name: "Rahul" }
];

// Reducer function
function employeeReducer(state, action) {
  switch (action.type) {

    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, name: action.payload.name }
          : employee
      );

    case "DELETE":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Operations() {
  const [employees, dispatch] = useReducer(employeeReducer,initialState );
  const [name, setName] = useState("");
  // ADD employee
  function addEmployee() {
    if (!name.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name: name
      }
    });

    setName("");
  }

  // UPDATE employee
  function updateEmployee(id) {
    const newName = prompt("Enter updated name:");

    if (newName && newName.trim()) {
      dispatch({
        type: "UPDATE",
        payload: {
          id: id,
          name: newName
        }
      });
    }
  }

  // DELETE employee
  function deleteEmployee(id) {
    dispatch({
      type: "DELETE",
      payload: id
    });
  }

  // RESET employee list
  function resetEmployees() {
    dispatch({ type: "RESET" });
  }

  return (
    <div>
      <h2>Employee Management</h2>

      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addEmployee}>Add</button>
      <button onClick={resetEmployees}>Reset</button>
      <h3>Employee List</h3>

      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.name}

          <button onClick={() => updateEmployee(employee.id)}>
            Update
          </button>

          <button onClick={() => deleteEmployee(employee.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Operations;
