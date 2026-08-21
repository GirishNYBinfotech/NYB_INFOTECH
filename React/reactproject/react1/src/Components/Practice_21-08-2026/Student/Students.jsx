import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h2>Students</h2>
      <Link to="/students/101"> Ravi</Link>
      <br />
      <Link to="/students/102">Rahul</Link>

    </div>
  );
}

export default Students