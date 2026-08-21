import { useParams, Link, Outlet } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams()

  return (
    <div>
      <h2>Student ID: {id}</h2>
      <Link to="profile">Profile</Link>
      <br />
      <Link to="courses">Courses</Link>
      <hr />
      <Outlet />

    </div>
  );
}

export default StudentDetails;