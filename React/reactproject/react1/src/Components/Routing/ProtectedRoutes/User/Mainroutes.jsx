import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Dashboard from "./Dashboard";
import User from "./User";
import ProtectedRoute from "./Protectedroute";

function Mainroutes() {
  return (
    <>
    <h2>New page</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/user/:101">User id</Link>
      </nav>

      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Route */}
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
        {/* Dynamic Route */}
        <Route path="/user/:id" element={<User/>} />
      </Routes>
    </>
  );
}

export default Mainroutes