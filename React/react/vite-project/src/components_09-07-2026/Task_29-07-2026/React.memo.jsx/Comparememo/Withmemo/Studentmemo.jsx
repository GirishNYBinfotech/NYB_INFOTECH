import React from "react";

function Studentmemo({ name, course }) {
  console.log("Student Component Rendered");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>Course: {course}</p>
    </div>
  );
}

export default React.memo(Studentmemo);