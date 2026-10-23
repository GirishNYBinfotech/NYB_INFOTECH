
import { useEffect, useState } from "react";
import { Envvariables } from "./Envvariables";

function Variables() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await Envvariables();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Employee Management</h1>

      {users.length === 0 ? (
        <p>Loading users...</p>) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}-
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Variables;
