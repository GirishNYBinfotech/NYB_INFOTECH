import { lazy, Suspense } from "react";
import {Navigate,Route,Routes} from "react-router-dom";

import { EmployeeProvider } from "./EmployeeContext";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "./ErrorBoundary";

const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const Employees = lazy(() => import("./Employees"));
const EmployeeDetails = lazy(() => import("./EmployeeDetails"));
const EmployeeFormPage = lazy(() => import("./EmployeeFormPage"));

export default function Employee() {
  return (
    <ErrorBoundary>
      <EmployeeProvider>
        <>
          <Suspense fallback={<p>Loading page...</p>}>
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<p>Welcome to Dashboard</p>} />
                  <Route path="employees" element={<Employees />}>
                    <Route path=":id" element={<EmployeeDetails />} />
                    <Route path=":id/edit" element={<EmployeeFormPage />}/>
                  </Route>

                  <Route
                    path="add-employee"
                    element={<EmployeeFormPage />}
                  />
                </Route>
              </Route>

              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<p>404 - Page not found</p>} />
            </Routes>
          </Suspense>
        </>
      </EmployeeProvider>
    </ErrorBoundary>
  );
}