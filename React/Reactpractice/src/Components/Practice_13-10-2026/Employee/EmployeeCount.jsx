import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeCount() {
  const { state } = useContext(EmployeeContext);

  return (
    <h2>
      Total Employees: {state.employees.length}
    </h2>
  )
}