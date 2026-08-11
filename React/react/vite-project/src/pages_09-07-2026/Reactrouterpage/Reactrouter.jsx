import { Routes, Route, Link } from "react-router-dom";
import Home5 from "../../components_09-07-2026/React Router/Home5";
import Student from "../../components_09-07-2026/React Router/Student";
import Students from "../../components_09-07-2026/React Router/Students";
import Login from "../../components_09-07-2026/React Router/Login";
import Dashboard5 from "../../components_09-07-2026/React Router/Dashboard5";
import Profile from "../../components_09-07-2026/React Router/Profile";
import NotFound from "../../components_09-07-2026/React Router/Notfound";

function Reactrouter() {
  return (
    <div>
      <h1>Student App</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/student/101">Student 101</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home5/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/student/:id" element={<Student/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/dashboard" element={<Dashboard5/>}>
          <Route path="profile" element={<Profile/>} />
        </Route>

        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default Reactrouter