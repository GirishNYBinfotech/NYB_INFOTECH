import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {
  const { setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogin() {
    setIsAuthenticated(true)
    navigate("/dashboard")
  }

  return (
    <div>
      <h2>Login Page</h2>
      <p>logging to enter dashboard.</p>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login