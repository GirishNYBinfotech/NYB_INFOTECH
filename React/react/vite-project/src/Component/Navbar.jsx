import React from "react";
import {Link,useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <nav>
            <h2>React Routing App</h2>
            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/users">
                    Users
                </Link>
                <Link to="/dashboard">
                    Dashboard
                </Link>
                <button onClick={logout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;