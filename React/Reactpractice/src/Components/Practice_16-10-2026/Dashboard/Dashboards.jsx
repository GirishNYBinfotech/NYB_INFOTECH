
import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Hello, React!</p>}

      <button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>

      <Link to="/dashboard">Dashboard Link</Link>
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

export default function Dashboards() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
