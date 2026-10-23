import {createContext,useReducer,useState} from "react";

export const EmployeeContext = createContext();

const initialState = {
  employees: [
    {
      id: "1",
      name: "Girish",
      email: "girish@gmail.com",
      department: "IT",
      salary: 40000
    },
    {
      id: "2",
      name: "King",
      email: "King@gmail.com",
      department: "HR",
      salary: 35000
    }
  ]
};

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload
        ]
      };

    case "UPDATE":
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload.id
            ? action.payload
            : emp
        )
      };

    case "DELETE":
      return {
        ...state,
        employees: state.employees.filter(
          emp => emp.id !== action.payload
        )
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

  const [user, setUser] = useState(null);

  return (
    <EmployeeContext.Provider
      value={{ state, dispatch, user, setUser }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}