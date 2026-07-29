import React, { useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [count, setCount] = useState(0);
  console.log("parent Rendered");
  return (
    <div>
      <h2>React.memo Example</h2>
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <hr />
      <Employee
        name="Girish"
        department="IT"
        salary={15000}
      />
    </div>
  );
}

export default EmployeeList