import React, { useEffect, useState } from "react";

function Useeffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  );
}

export default Useeffect