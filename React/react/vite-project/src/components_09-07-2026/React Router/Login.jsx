import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function login() {
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login</h2>

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;