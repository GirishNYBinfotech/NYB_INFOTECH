import { useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Girish", status: "Active" },
    { id: 2, name: "Rahul", status: "Inactive" }
  ]);

  // Add employee
  const addEmployee = (name) => {
    if (!name.trim()) return;

    setEmployees(prev => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        status: "Active"
      }
    ]);
  };

  // Update employee name
  const updateEmployee = (id, name) => {
    if (!name.trim()) return;

    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, name: name.trim() } : emp
      )
    );
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  // Update employee status
  const updateStatus = (id) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id
          ? {
              ...emp,
              status: emp.status === "Active" ? "Inactive" : "Active"
            }
          : emp
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        updateStatus
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}