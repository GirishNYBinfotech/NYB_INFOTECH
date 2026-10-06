import { react,useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function StudentApp() {
  const [students, setStudents] = useState([]);
  function addStudent(name) {
    const newStudent = {
      id: Date.now(),
      name: name
    }
    setStudents([...students, newStudent]);
  }

  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    )
  }

  return (
    <div>
      <h1>Student Management App</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default StudentApp;