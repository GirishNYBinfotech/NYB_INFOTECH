import { useState } from "react";
import {Routes,Route,Link,NavLink,Navigate,Outlet,useNavigate,useLocation} from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import {initialEmployees,Dashboard,EmployeeList,EmployeeDetails,EmployeeForm} from "./Employees";

// Login Page
function Login() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  if (isLoggedIn) return <Navigate to="/dashboard" replace />;
  function handleLogin(e) {
    e.preventDefault();

    if (login(username, password)) {
      navigate(location.state?.from || "/dashboard", {
        replace: true,
      });
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="login card">
      <h1>Employee Portal Login</h1>

      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>

      <p>Demo: admin / admin123</p>
    </div>
  );
}

// Protect routes that require login
function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  return <Outlet />;
}

function DashboardLayout() {
  const { logout } = useAuth();

  return (
    <div>
      <header>
        <h1>Employee Managment Portal</h1>
        <nav>
          <NavLink to="/dashboard" end>Dashboard</NavLink> |{""}
          <NavLink to="/dashboard/employees">Employees</NavLink> |{""}
          <NavLink to="/dashboard/add">Add Employee</NavLink>
        </nav>

        <button onClick={logout}>Logout</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

function AppRoutes() {
  const [employees, setEmployees] = useState(initialEmployees);

  function addEmployee(employee) {
    setEmployees(prev => [...prev, employee]);
  }

  function updateEmployee(updated) {
    setEmployees(prev =>
      prev.map(e => e.id === updated.id ? updated : e)
    );
  }

  function deleteEmployee(id) {
    setEmployees(prev => prev.filter(e => e.id !== id));
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={<Dashboard employees={employees} />}
          />

          <Route
            path="employees"
            element={
              <EmployeeList
                employees={employees}
                deleteEmployee={deleteEmployee}
              />
            }
          />

          <Route
            path="employees/:id"
            element={<EmployeeDetails employees={employees} />}
          />

          <Route
            path="add"
            element={
              <EmployeeForm
                employees={employees}
                addEmployee={addEmployee}
                updateEmployee={updateEmployee}
              />
            }
          />

          <Route
            path="edit/:id"
            element={
              <EmployeeForm
                employees={employees}
                addEmployee={addEmployee}
                updateEmployee={updateEmployee}
              />
            }
          />
        </Route>
      </Route>

      {/* Default page and 404 */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function EmpDetails() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
