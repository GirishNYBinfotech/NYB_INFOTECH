import {  Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import Login from "./Login";
import ProtectedRoute from "./ProtoctedRoute";
import Dashboard from "./Dashboard";


function Application() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/jobs">Jobs</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>

        {/* Normal Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>} />

        {/* Dynamic Route */}
        <Route path="/jobs/:id" element={<JobDetails/>} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>

    </>
  );
}

export default Application