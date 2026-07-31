import React, { Suspense, lazy, useState } from "react";
// Normal Import
import Home from "./Home";
// Lazy Import
const About = lazy(() => import("./About"));

function Homepage() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <h1>React.lazy </h1>
      <Home />
      <button onClick={() => setShowAbout(!showAbout)}>Show About</button>
      <hr />
      <Suspense fallback={<h3>Loading About Component...</h3>}>
        {showAbout && <About />}
      </Suspense>
    </div>
  );
}

export default Homepage