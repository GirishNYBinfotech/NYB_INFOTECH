import { useState } from "react";
import {Routes,Route,Navigate, Link, useNavigate} from "react-router-dom";

function ProtectedRoute({ isAdmin, children }) {
  return isAdmin ? children : <Navigate to="/" />;
}

function Home() {
  return <h2>Home Page</h2>;
}

function Admin({ setIsAdmin }) {
  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <button onClick={() => setIsAdmin(false)}>
        Logout
      </button>
    </div>
  );
}

export default function Protectedroutes() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAdmin(true);
    navigate("/admin");
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin"
          element={
            <ProtectedRoute isAdmin={isAdmin}>
              <Admin setIsAdmin={setIsAdmin} />
            </ProtectedRoute>
          }
        />
      </Routes>

      <button onClick={handleLogin}>
        Login as Admin
      </button>
    </>
  );
}