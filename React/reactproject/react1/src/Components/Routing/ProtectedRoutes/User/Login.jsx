import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/Dashboard");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login