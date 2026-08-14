import { Link } from "react-router-dom";

function Students() {
    return (
        <div>
            <h1>Students</h1>
            <Link to="/students/101">Student 101</Link>
            <br />
            <Link to="/students/102">Student 102</Link>
            <br />
            <Link to="/students/103">Student 103</Link>
        </div>
    );
}

export default Students;