import React, { useState } from "react";

function FetchAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET
  const getUsers = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json()
      setUsers(data)
      console.log("GET:", data)
    } 
    catch (error) {
      setError(error.message)
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  };

  // POST
  const createUser = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: "Girish",
            email: "girish@gmail.com"
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user")
      }

      const data = await response.json()
      console.log("POST:", data)
    } 
    catch (error) {
      setError(error.message)
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  }

  // PUT
  const updateUser = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: "Girish Updated",
            email: "updated@gmail.com"
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user")
      }

      const data = await response.json()
      console.log("PUT:", data)
    } 
    catch (error) {
      setError(error.message)
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  };

  // PATCH
  const patchUser = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: "Girish Changed"
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to change user")
      }

      const data = await response.json();

      console.log("PATCH:", data);
    } 
    catch (error) {
      setError(error.message)
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  };

  // DELETE
  const deleteUser = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user")
      }

      console.log("DELETE Status:", response.status)
    } 
    catch (error) {
      setError(error.message)
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <h1>Fetch API</h1>
      <button onClick={getUsers}>GET Users</button>
      <button onClick={createUser}>POST User</button>
      <button onClick={updateUser}>PUT User</button>
      <button onClick={patchUser}>PATCH User</button>
      <button onClick={deleteUser}>DELETE User</button>

      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error}</h3>}

      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.id} - {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default FetchAPI