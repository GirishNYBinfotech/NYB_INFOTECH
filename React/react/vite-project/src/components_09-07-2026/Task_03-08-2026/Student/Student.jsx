import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Courses from "./Courses";
import NotFound from "./NotFound";


function Student() {
  return (
    <div>
      <h1>Student Portal</h1>

      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/courses">Courses</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
    <Route path="/students" element={<Students />} />
    <Route path="/courses" element={<Courses/>} />
    <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default Student