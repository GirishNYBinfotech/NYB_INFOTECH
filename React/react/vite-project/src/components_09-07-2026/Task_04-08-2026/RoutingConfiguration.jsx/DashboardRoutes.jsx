import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

const DashboardRoutes = (
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
);

export default DashboardRoutes;