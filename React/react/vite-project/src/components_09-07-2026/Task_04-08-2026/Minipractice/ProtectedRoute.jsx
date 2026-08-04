import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;