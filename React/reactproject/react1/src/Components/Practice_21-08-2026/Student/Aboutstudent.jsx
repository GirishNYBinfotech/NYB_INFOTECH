import { Routes, Route, Link } from "react-router-dom";
import Students from "./Students";
import StudentDetails from "./Studentdetails";
import Profile from "./Profile";
import Courses from "./Course";


function Aboutstudent() {
  return (
    <>
      <h1>Student Management</h1>
      <Link to="/students">Students</Link>
      <Routes>
        <Route path="/students" element={<Students/>}/>
        <Route path="/students/:id" element={<StudentDetails/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="courses" element={<Courses/>}/>
        </Route>
      </Routes>
      </>
  )
}

export default Aboutstudent