import React from "react";

import { useParams } from "react-router-dom";

function UserDetails4() {
    const { id } = useParams();
    return (
        <div className="page">
            <h1>User Details</h1>
            <p>
                User ID: {id}
            </p>
        </div>
    );
}

export default UserDetails4