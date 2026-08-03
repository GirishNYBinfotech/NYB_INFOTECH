import {  Link } from "react-router-dom";

function Student() {
  return (
    <>
      <h1>Student Management</h1>
      <Link to="/">Home</Link> |
      <Link to="/students">Students</Link> |
      <Link to="/about">About</Link>
      <hr />
    </>
  );
}

export default Student