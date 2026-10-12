import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h1>Employee Management System</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
      <hr />
      <footer>Copyright 2026</footer>
    </div>
  );
}

export default MainLayout