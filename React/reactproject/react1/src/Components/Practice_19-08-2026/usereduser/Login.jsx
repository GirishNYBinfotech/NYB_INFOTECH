import { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  error: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.value
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.value
      };

    case "LOGIN":
      if (state.username === "admin" && state.password === "1234") {
        return {
          ...state,
          isLoggedIn: true,
          error: ""
        };
      }

      return {
        ...state,
        isLoggedIn: false,
        error: "Invalid username or password"
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.isLoggedIn) {
    return (
      <div>
        <h2>Welcome {state.username}</h2>
        <button onClick={() => dispatch({ type: "LOGOUT" })}> Logout</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) => dispatch({type: "SET_USERNAME",value: e.target.value})}/>
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) => dispatch({type: "SET_PASSWORD",value: e.target.value})}/>
      <br /><br />
      <button onClick={() => dispatch({ type: "LOGIN" })}>Login</button>
      {state.error && <p>{state.error}</p>}
    </div>
  );
}

export default Login;