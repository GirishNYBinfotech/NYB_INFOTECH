import React from "react";

function UserList({ users }) {
  return (
    <>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default UserList;