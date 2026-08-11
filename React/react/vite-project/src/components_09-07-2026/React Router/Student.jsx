import { useParams } from "react-router-dom";

function Student() {
  const { id } = useParams();

  return (
    <div>
      <h2>Student Details</h2>

      <p>Student ID: {id}</p>
    </div>
  );
}

export default Student;