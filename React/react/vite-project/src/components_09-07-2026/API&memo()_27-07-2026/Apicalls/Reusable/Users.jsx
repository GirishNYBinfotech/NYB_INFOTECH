import React, { useEffect, useState } from "react";
import {getUsers} from "./service"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers()
    setUsers(data);
  };

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  );
}

export default Users;