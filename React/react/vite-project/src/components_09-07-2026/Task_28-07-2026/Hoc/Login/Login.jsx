import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function Login() {
  return <ProtectedDashboard />;
}

export default Login