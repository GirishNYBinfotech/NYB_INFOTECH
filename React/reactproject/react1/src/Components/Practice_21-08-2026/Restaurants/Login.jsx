import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();
  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/profile");
  }

  return (
    <div>
      <h1>Login</h1>
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;