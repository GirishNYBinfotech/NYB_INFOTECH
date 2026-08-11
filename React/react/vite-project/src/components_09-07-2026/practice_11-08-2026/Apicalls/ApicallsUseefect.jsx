import React, { useEffect, useState } from "react";

function ApicallsUseeffect() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)

        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } 
      catch (error) {
        setError(error.message);
      } 
      finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  //Post
  const createUser = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: "Girish",
          email: "girish@gmail.com",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const newUser = await response.json();
      console.log("Created:", newUser);
      setUsers((previousUsers) => [
        ...previousUsers,
        newUser,
      ]);
    } 
    catch (error) {
      setError(error.message);
    }
  };


  //Put
  const updateUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: "Girish",
          username: "girish123",
          email: "girish@gmail.com",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const updatedUser = await response.json();
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


  //Patch
  const patchUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: "Updated Name",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to patch user");
      }

      const updatedUser = await response.json();

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


  //Delete
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

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
        <div key={user.id}
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

export default ApicallsUseeffect