import { useState } from "react";

export default function StudentCard({student,onView,onEdit,onDelete,}) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>

      <button type="button" onClick={() => onView(student)}>View</button>
      <button type="button" onClick={() => onEdit(student)}>Edit</button>
      <button type="button" onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}
