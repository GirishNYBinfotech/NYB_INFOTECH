import React from "react";

import {Link,Outlet} from "react-router-dom";

function Dashboard4() {

    return (
        <div className="page">

            <h1>Dashboard</h1>

            <p>
                This is a protected page.
            </p>

            <Link to="/dashboard/profile">
                Open Profile
            </Link>

            <Outlet />

        </div>
    );
}

export default Dashboard4