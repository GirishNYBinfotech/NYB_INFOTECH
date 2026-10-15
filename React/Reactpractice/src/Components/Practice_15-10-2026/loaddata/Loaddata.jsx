import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com";
async function fetchUsers() {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

function Loaddata() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {error && <p>Error: {error}</p>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Loaddata;
