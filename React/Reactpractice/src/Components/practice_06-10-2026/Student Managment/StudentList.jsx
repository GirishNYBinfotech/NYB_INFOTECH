import React from "react";
import Student from "./Student";

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        students.map((student) => (
          <Student
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;