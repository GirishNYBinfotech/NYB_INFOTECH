import React from "react";
import { useNavigate } from "react-router-dom";

function Login4() {

    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem(
            "isLoggedIn",
            "true"
        )
        navigate("/dashboard");
    }
    return (
        <div className="page">
            <h1>Login Page</h1>
            <p>
                Click the button to login.
            </p>
            <button onClick={login}>
                Login
            </button>

        </div>
    );
}

export default Login4