import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

function Homepage() {
  return (
    <div>
        <h2>Authentication</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
  );
}

export default Homepage