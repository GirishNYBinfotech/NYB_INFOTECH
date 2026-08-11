import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosApicalls() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com/users";
  // GET
  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);

        const response = await axios.get(API_URL)
        setUsers(response.data)
      } 
      catch (error) {
        setError(error.message)
      } 
      finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  // POST
  const createUser = async () => {
    try {
      const response = await axios.post(API_URL, {
        name: "Girish",
        email: "girish@gmail.com",
      });

      const newUser = response.data
      console.log("Created:", newUser)

      setUsers((previousUsers) => [
        ...previousUsers,
        newUser,
      ]);
    } catch (error) {
      setError(error.message)
    }
  };

  // PUT
  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        name: "Girish",
        username: "girish123",
        email: "girish@gmail.com",
      });

      const updatedUser = response.data
      console.log("Updated:", updatedUser);

      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user.id === id
            ? { ...user, ...updatedUser }
            : user
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // PATCH
  const patchUser = async (id) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, {
        name: "Updated Name",
      });

      const updatedUser = response.data;

      console.log("Patched:", updatedUser);

      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user.id === id
            ? { ...user, ...updatedUser }
            : user
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      console.log("Deleted:", id);

      setUsers((previousUsers) =>
        previousUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>User Management</h1>
      {/* POST */}
      <button onClick={createUser}>CREATE USER</button>

      <hr />

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          {/* PUT */}
          <button onClick={() => updateUser(user.id)}>PUT</button>
          {/* PATCH */}
          <button onClick={() => patchUser(user.id)}>PATCH</button>
          {/* DELETE */}
          <button onClick={() => deleteUser(user.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default AxiosApicalls