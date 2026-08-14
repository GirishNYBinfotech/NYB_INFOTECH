import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Doctors from "./Doctors";
import Patients from "./Patients";
import DoctorDetails from "./DoctorDetails";
import NotFound from "./NotFound";

function Hospital() {
  return (
    <>
    <nav>
      <h2>City Care Hospital</h2>
      <Link to="/">Home</Link> |{" "}
      <Link to="/doctors">Doctors</Link> |{" "}
      <Link to="/patients">Patients</Link>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/patients" element={<Patients/>} />

        {/* Dynamic Route */}
        <Route path="/doctors/:id" element={<DoctorDetails/>} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
    
  );
}

export default Hospital