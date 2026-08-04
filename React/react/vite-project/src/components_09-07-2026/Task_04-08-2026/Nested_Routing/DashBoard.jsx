import { Link, Outlet, Route, Routes } from "react-router-dom";


function DashBoard() {
  return (
    <>
      <h2>Dashboard</h2>

      <Link to="profile">Profile</Link> |{" "}
      <Link to="settings">Settings</Link>
      <hr />
      <Outlet />
    </>
  );
}

export default DashBoard;