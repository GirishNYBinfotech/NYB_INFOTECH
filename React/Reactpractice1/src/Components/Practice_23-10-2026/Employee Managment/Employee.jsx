import {Routes,Route,Navigate,Link,Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
import { EmployeeProvider } from "./EmployeeContext";
import Login from "./Login";
import { useEmployees } from "./UseEmployee";

const Dashboard = lazy(() => import("./Dashboard"));
const EmployeeList = lazy(() => import("./EmployeeList"));
const EmployeeDetails = lazy(() => import("./EmployeeDetails"));
const EmployeeForm = lazy(() => import("./EmployeeForm"));

function ProtectedRoute() {
  const { user } = useEmployees();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function Layout() {
  const { setUser } = useEmployees();
  return (
    <>
    <h1>Employees</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>{" | "}
        <Link to="/employees">Employees</Link>{" | "}
        <Link to="/employees/add">Add Employee</Link>{" | "}
        <button onClick={() => setUser(null)}>
          Logout
        </button>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default function Employee() {
  return (
    <EmployeeProvider>
      <>
        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/employees" element={<EmployeeList />}/>
                <Route path="/employees/add" element={<EmployeeForm />}/>
                <Route path="/employees/edit/:id" element={<EmployeeForm />}/>
                <Route path="/employees/:id" element={<EmployeeDetails />}/>
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />}/>
          </Routes>
        </Suspense>
      </>
    </EmployeeProvider>
  );
}