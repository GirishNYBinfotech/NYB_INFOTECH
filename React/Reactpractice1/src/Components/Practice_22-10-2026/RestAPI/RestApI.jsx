
import { useEffect, useState } from "react";

function RestAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } 
      catch (err) {
        setError(err.message);
      } 
      finally {
        setLoading(false);
      }
    }
    fetchUsers();
  },[])
  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default RestAPI;
