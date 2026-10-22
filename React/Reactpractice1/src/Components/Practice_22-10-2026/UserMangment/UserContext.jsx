import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();
const initialState = {users: [],loading: true,error: ""};

function userReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? action.payload
            : user
        ),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(
    userReducer,
    initialState
  );

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        dispatch({
          type: "FETCH_SUCCESS",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message,
        });
      }
    }

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}