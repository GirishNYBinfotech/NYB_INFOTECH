import { useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  username: ""
}

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        isLoggedIn: true,
        username: action.username
      };

    case "logout":
      return {
        isLoggedIn: false,
        username: ""
      };

    default:
      return state
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {state.isLoggedIn ? (
        <>
          <h2>Welcome {state.username}</h2>
          <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
        </>) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() =>dispatch({
                type: "login",
                username: "Girish"
              })
            }>Login</button>
        </>
      )}
    </div>
  );
}

export default Login