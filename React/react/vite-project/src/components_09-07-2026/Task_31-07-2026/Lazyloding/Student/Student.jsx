import React, { useState, Suspense } from "react";

// Lazy Loading
const StudentDetails = React.lazy(() => import("./StudentDetails"));

function Student() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React Lazy Loading Example</h1>
      <button onClick={() => setShow(true)}>Show Student Details</button>
      <Suspense fallback={<h2>Loading Student Details...</h2>}>
        {show && <StudentDetails />}
      </Suspense>
    </div>
  );
}

export default Student