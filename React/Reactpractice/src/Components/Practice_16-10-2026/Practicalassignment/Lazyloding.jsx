import { lazy, Suspense } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { EmployeeProvider } from "./EmployeeContext";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const Employees = lazy(() => import("./Employees"));
const EmployeeDetails = lazy(() => import("./EmployeeDetails"));

export default function Lazyloding() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Dashboard</Link>{" | "}
          <Link to="/employees">Employees</Link>
        </nav>

        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route
                path="/employees/:id"
                element={<EmployeeDetails />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </EmployeeProvider>
  );
}