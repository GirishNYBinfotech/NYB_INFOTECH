import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home2";
import Users from "./Users1";
import UserDetails from "./UserDetails";

function User() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* Dynamic Route */}
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default User