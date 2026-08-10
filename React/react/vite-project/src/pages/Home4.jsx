import React from "react";

import { useNavigate } from "react-router-dom";

function Home4() {

    const navigate = useNavigate();

    return (
        <div className="page">
            <h1>Home Page</h1>
            <p>
                Welcome to the React Routing Application.
            </p>
            <button
                onClick={() => navigate("/about")}>
                Go to About
            </button>

        </div>
    );
}

export default Home4;