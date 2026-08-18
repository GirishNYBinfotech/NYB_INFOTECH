import React, { useState } from "react";
import axios from "axios"

function Axios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET
  const getUsers = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data);
      console.log("GET:", response.data)
    } 
    catch (error) {
      setError("Failed to fetch users")
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
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Girish",
          email: "girish@gmail.com",
        }
      );

      console.log("POST:", response.data)
    } 
    catch (error) {
      setError("Failed to create user")
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  };

  // PUT
  const updateUser = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Girish Updated",
          email: "updated@gmail.com",
        }
      );

      console.log("PUT:", response.data)
    } 
    catch (error) {
      setError("Failed to update user")
      console.log(error);
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
      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Girish Changed",
        }
      );

      console.log("PATCH:", response.data)
    } 
    catch (error) {
      setError("Failed to change user")
      console.log(error);
    } 
    finally {
      setLoading(false);
    }
  };

  // DELETE
  const deleteUser = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      console.log("DELETE:", response.status)
    } 
    catch (error) {
      setError("Failed to delete user")
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <h1>Axios API</h1>
      <button onClick={getUsers}>GET Users</button>
      <button onClick={createUser}>POST User</button>
      <button onClick={updateUser}>PUT User</button>
      <button onClick={patchUser}>PATCH User</button>
      <button onClick={deleteUser}>DELETE User</button>

      
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.id} - {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default Axios;