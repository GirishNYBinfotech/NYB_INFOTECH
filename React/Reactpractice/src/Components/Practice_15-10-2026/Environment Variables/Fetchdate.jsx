
import { useEffect, useState } from "react";

function Fetchdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const url = `${import.meta.env.VITE_API_URL}/users`;

        console.log("API URL:", url);

        const response = await fetch(url);
        const text = await response.text();

        console.log("Response status:", response.status);
        console.log("Response body:", text.slice(0, 200));

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = JSON.parse(text);
        setUsers(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Fetchdata;
