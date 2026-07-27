import React, { useEffect, useState } from "react";
import ChildCard from "./ChildCard";

function ParentCard() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0,4)));
  }, []);

  console.log("App Component Rendered");

  return (
    <div>
      <h1>User List</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {users.map((user) => (
        <ChildCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default ParentCard