import React from "react";
import { Link } from "react-router-dom";

function Users() {

    const users = [
        {
            id: 1,
            name: "Girish"
        },
        {
            id: 2,
            name: "Rahul"
        },
        {
            id: 3,
            name: "Priya"
        }
    ];

    return (
        <div className="page">

            <h1>Users</h1>

            {
                users.map(user => (

                    <div key={user.id}>

                        <Link
                            to={`/users/${user.id}`}
                        >
                            {user.name}
                        </Link>

                    </div>

                ))
            }

        </div>
    );
}

export default Users;