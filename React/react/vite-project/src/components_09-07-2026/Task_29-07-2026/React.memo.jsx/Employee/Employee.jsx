import React from "react";

function Employee({ name, department, salary }) {
  console.log("Employee Rendered");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "250px",
      }}
    >
      <h3>{name}</h3>
      <p>Department : {department}</p>
      <p>Salary:{salary}</p>
    </div>
  );
}

export default React.memo(Employee);