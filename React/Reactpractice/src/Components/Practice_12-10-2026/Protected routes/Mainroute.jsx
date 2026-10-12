import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function Mainroute() {
  return (
    <>
    <h2> Login for Dashboard</h2>
      <nav>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default Mainroute