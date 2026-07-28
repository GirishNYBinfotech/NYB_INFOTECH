import React from "react";

function Fragments() {
  const students = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "David" }
  ]

  return (
    <>
      {students.map((student) => (
        <React.Fragment key={student.id}>
          <h3>{student.id}.{student.name}</h3>
        </React.Fragment>
      ))}
    </>
  );
}

export default Fragments