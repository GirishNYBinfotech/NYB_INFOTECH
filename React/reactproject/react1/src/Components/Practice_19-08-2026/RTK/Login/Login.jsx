import { useDispatch } from "react-redux";
import { login, logout } from "./userSlice";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login("Girish"))
  }
  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Login;