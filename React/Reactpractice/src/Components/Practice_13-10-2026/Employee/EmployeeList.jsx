import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeList() {
  const { state, dispatch } = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee List</h2>

      {state.employees.map((emp) => (
        <p key={emp.id}>
          {emp.name}{" "}
          <button
            onClick={() =>
              dispatch({
                type: "DELETE_EMPLOYEE",
                payload: emp.id,
              })
            }
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}