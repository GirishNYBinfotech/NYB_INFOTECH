import { createContext, useContext } from "react";
import useEmployees from "./useEmployees";

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const employeeData = useEmployees();

  return (
    <EmployeeContext.Provider value={employeeData}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}