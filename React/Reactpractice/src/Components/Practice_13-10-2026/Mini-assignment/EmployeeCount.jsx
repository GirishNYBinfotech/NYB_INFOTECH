import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeCount() {
  const { employees } = useContext(EmployeeContext);

  const activeCount = employees.filter(
    emp => emp.status === "Active"
  ).length;

  return (
    <div>
      <h3>Total Employees: {employees.length}</h3>
      <h3>Active Employees: {activeCount}</h3>
    </div>
  );
}