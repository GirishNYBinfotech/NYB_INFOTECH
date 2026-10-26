import {createContext,useContext, useEffect,useReducer,useState} from "react";

const EmployeeContext = createContext();

function employeeReducer(state, action) {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return action.payload;

    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    case "UPDATE_EMPLOYEE":
      return state.map((emp) =>
        emp.id === action.payload.id ? action.payload : emp
      );

    case "DELETE_EMPLOYEE":
      return state.filter((emp) => emp.id !== action.payload);

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(employeeReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch employees");
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_EMPLOYEES",
          payload: data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            department: "IT",
          })),
        });
      })
      .catch(() => setError("Unable to load employees"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <EmployeeContext.Provider
      value={{ employees, dispatch, loading, error }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}