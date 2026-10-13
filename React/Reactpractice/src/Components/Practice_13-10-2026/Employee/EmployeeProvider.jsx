import { useReducer } from "react";
import { EmployeeContext } from "./EmployeeContext";

const initialState = {
  employees: [],
};

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload,
        ],
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialState
  );

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}