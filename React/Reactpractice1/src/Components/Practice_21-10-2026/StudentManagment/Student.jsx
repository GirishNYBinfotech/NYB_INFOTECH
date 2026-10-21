import React, { useState } from "react";
import StudentCard from "./StudentCard";
import { StudentForm } from "./StudentForm";

export default function Student() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      course: "React",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      course: "JavaScript",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Search students
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  )
  function saveStudent(data) {
    if (editing) {
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editing.id ? { ...s, ...data } : s
        )
      );
    } else {
      setStudents((prev) => [
        ...prev,
        { ...data, id: Date.now() },
      ])
    }

    setShowForm(false);
    setEditing(null);
  }

  // Delete student
  function deleteStudent(id) {
    if (window.confirm("Delete this student?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
      setSelected((prev) => prev?.id === id ? null : prev);
    }
  }

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <input
        placeholder="Search student by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
      type="button"
       onClick={() => {
        setEditing(null);
        setSelected(null);
        setShowForm(true);
      }}>
        Add Student
      </button>

      {/* Conditional Rendering */}
      {showForm && (
        <StudentForm
          key={editing?.id ?? "new"}
          initialData={editing}
          onSave={saveStudent}
          onCancel={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}

      {selected && !showForm && (
        <div className="details">
          <h2>Student Details</h2>
          <p>ID: {selected.id}</p>
          <p>Name: {selected.name}</p>
          <p>Email: {selected.email}</p>
          <p>Course: {selected.course}</p>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}

      {/* Student List */}
      {!showForm && (
        <div>
          <h2>Student List</h2>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onView={setSelected}
                onEdit={(student) => {
                  setEditing(student);
                  setSelected(null);
                  setShowForm(true);
                }}
                onDelete={deleteStudent}/>))):(<p>No students found.</p>)}
        </div>
      )}
    </div>
  );
}