import {Routes, Route,Link, useParams, Outlet} from "react-router-dom";

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function Employee() {
  const { id } = useParams();

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee ID: {id}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>{" | "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

// Nested child components
function Profile() {
  return <h3>Dashboard Profile Page</h3>;
}

function Settings() {
  return <h3>Dashboard Settings Page</h3>;
}

// Main App
export default function Webpage() {
  return (
    <>
      <h1>React Router</h1>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/employee/101">Employee 101</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic Route */}
        <Route path="/employee/:id" element={<Employee />}/>
        {/* Parent Route with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
