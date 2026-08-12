import { useDispatch, useSelector } from "react-redux";
import {addStudent,removeStudent,clearStudents} from "./studentSlice";

function Students() {

  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students)

  const addNewStudent = () => {
    const student = {
      id: Date.now(),
      name: "Rahul",
      marks: 85
    };

    dispatch(addStudent(student));
  };

  return (
    <div>

      <h1>Student Management</h1>
      <button onClick={addNewStudent}> Add Student</button>
      <button onClick={() => dispatch(clearStudents())}>Clear All</button>

      <h2>Students</h2>
      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p> Marks: {student.marks}</p>

          <button onClick={() => dispatch(removeStudent(student.id))} >Remove </button>
        </div>

      ))}

    </div>
  );
}

export default Students;