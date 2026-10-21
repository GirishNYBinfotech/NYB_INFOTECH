import React, { useState } from "react";

export function StudentForm({ onSave, initialData, onCancel }) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [course, setCourse] = useState(initialData?.course || "");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !course.trim()) {
      setError("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
        setError("Email must contain @");
        return;
    }

    setError("")
    onSave({
      ...initialData,
      name: name.trim(),
      email: email.trim(),
      course: course.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>{initialData ? "Edit Student" : "Add Student"}</h2>

      {error && <p className="error">{error}</p>}

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">Save Student</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}
