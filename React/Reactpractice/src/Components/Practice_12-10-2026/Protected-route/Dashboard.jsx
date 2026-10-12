import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()

  function handleLogout() {
    setIsAuthenticated(false)
    navigate("/login")
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard