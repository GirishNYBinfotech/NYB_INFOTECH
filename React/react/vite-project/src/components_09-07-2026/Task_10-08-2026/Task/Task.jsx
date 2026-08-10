import React, { useState } from "react";

function Student({ name, course }) {
  const [isPresent, setIsPresent] = useState(true);
  const subjects = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h1>Student Details</h1>
      <h2>Name: {name}</h2>
      <h3>Course: {course}</h3>
      <p> Status: {isPresent ? "Present" : "Absent"}</p>
      <button onClick={() => setIsPresent(!isPresent)}>Change Status </button>
      <h3>Subjects:</h3>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

function Task() {
  return (
    <div>
      <Student name="Girish" course="React" />
    </div>
  );
}

export default Task
