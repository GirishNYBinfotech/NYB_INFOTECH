import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export function useEmployees() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error(
      "useEmployees must be used inside EmployeeProvider"
    );
  }

  return context;
}