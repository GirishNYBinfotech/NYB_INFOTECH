import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const loggedIn = localStorage.getItem("loggedIn");

  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}