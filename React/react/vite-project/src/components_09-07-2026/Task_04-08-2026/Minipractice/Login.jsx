import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("isLogin", "true");
    navigate("/dashboard");
  };
  return (
    <>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;