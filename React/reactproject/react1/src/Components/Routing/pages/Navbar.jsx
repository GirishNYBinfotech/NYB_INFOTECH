import { Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Students from "./Students";
import StudentDetails from "./StudentDetails";

function Navbar() {
    return (
        <>
        <h2>StudentDetails</h2>
        <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/students">Students</Link>
            </nav>
       </>
    );
}

export default Navbar