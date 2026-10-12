import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";

function RoutesS() {
  return (
    <AuthProvider>
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }/>
          <Route path="/"  element={<Navigate to="/dashboard" replace />}/>
        </Routes>
      </>
    </AuthProvider>
  );
}

export default RoutesS