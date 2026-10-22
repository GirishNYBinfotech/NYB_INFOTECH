import { useContext } from "react";
import Context from "./Context";

function Consumers() {
  const { employees = [] } = useContext(Context) || {};

  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>) : (
        employees.map((employee) => (
          <p key={employee.id}>{employee.name}</p>
        ))
      )}
    </div>
  );
}

export default Consumers;