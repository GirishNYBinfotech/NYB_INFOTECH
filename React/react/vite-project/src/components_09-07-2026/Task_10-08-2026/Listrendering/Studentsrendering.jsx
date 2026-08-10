import React from "react";

function Studentsrendering() {
  const students = [
    { id: 101, name: "Girish", age: 22 },
    { id: 102, name: "Rahul", age: 21 },
    { id: 103, name: "Anil", age: 23 }
  ];

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.id}.{student.name}</h3>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Studentsrendering