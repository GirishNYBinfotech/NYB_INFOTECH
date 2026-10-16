import {createContext,useContext,useReducer} from "react";

const EmployeeContext = createContext();
const initialState = {employees: [],};

function employeeReducer(state, action) {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return { ...state, employees: action.payload };

    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? action.payload : emp
        ),
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

export function useEmployees() {
  return useContext(EmployeeContext);
}