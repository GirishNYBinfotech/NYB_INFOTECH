import { react,useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }

    addStudent(name);

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;