import React from "react";

const UserList = ({ users }) => {
    console.log("UserList Render");
    return (
        <>
            <h2>User List</h2>
            <ul>
                {
                    users.map(({ id, name }) => (
                        <li key={id}>
                            {name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default React.memo(UserList);