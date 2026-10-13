import React, { useReducer } from "react";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
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

export default function User() {
  const [state, dispatch] = useReducer(
    userReducer,
    initialState
  );

  const addUser = () => {
    dispatch({
      type: "ADD_USER",
      payload: {
        id: Date.now(),
        name: "John",
      },
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  return (
    <div>
      <h2>User Management</h2>

      <button onClick={addUser}>Add User</button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}