import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <nav>
        <Link to="profile">Profile</Link> |
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}