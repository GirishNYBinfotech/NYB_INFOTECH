import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Mainlayout";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

function Layoutroute() {
  return (
    <>
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Layoutroute;