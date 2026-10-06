import React from "react";

function Student({ student, deleteStudent }) {
  return (
    <div>
      <span>{student.name}</span>
      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default Student;