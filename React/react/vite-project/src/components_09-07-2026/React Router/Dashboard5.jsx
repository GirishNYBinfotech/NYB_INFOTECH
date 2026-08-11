import { Link, Outlet } from "react-router-dom";

function Dashboard5() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="profile">Profile</Link>

      <Outlet />
    </div>
  );
}

export default Dashboard5