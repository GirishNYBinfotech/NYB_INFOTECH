import {Suspense, useState } from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));

function Loding() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>My Application</h1>
      <button onClick={() => setShowDashboard(true)}>Open Dashboard</button>
      {showDashboard && (
        <Suspense fallback={<p>Loading Dashboard...</p>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}

export default Loding