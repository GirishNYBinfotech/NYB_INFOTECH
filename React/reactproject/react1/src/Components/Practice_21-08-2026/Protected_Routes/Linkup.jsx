import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoutes";
import Dashboard from "./Dashboard";



function Linkup() {
  return (
    <>
    <h2>Please Login</h2>
    <nav>
        <Link to='/login'>login</Link>
    </nav>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>

      </Routes>
    </>
  )
}

export default Linkup