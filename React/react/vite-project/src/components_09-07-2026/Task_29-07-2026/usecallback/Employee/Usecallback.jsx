import React, { useState, useCallback } from "react";
import Employee from "./Employee";

function Usecallback() {
  const [count, setCount] = useState(0);
  // Memoized function
  const promoteEmployee = useCallback(() => {
    console.log("Employee Promoted");
  }, []);
  console.log("Parent Render")

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <Employee
        name="John"
        onPromote={promoteEmployee}
      />
    </div>
  );
}

export default Usecallback