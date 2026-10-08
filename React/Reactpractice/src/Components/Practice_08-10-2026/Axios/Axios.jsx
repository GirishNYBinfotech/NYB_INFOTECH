import React, { useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // GET - Get all users
  const getUser = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
      setMessage("All users");
    } catch (error) {
      setMessage("GET Error");
    }
  };

  // POST - Create user
  const createUser = async () => {
    try {
      const response = await axios.post(API_URL, {
        name: "Girish",
        email: "girish@mail.com"
      });

      setData([response.data]); // convert object to array
      setMessage("POST Request");
    } catch (error) {
      setMessage("POST Error");
    }
  };

  // PUT - Update user
  const updateUser = async () => {
    try {
      const response = await axios.put(`${API_URL}/1`, {
        name: "Girish Updated",
        email: "girish@updated.com"
      });

      setData([response.data]);
      setMessage("PUT Request");
    } catch (error) {
      setMessage("PUT Error");
    }
  };

  // PATCH 
  const patchUser = async () => {
    try {
      const response = await axios.patch(`${API_URL}/1`, {
        name: "Girish Patched"
      })

      setData([response.data]);
      setMessage("PATCH Request");
    }
    catch (error) {
      setMessage("PATCH Error");
    }
  };

  // DELETE - Delete user
  const deleteUser = async () => {
    try {
      await axios.delete(`${API_URL}/1`);
      setData([]);
      setMessage("DELETE Request Successful");
    } catch (error) {
      setMessage("DELETE Error");
    }
  };

  return (
    <div>
      <h1>Axios HTTP Requests</h1>
      <button onClick={getUser}>GET</button>
      <button onClick={createUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={patchUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>

      <h2>{message}</h2>
      <h3>Response:</h3>
      {data.map((user) => (
        <div key={user.id}>
          <p><b>ID:</b> {user.id}</p>
          <p><b>Name:</b> {user.name} </p>
          <p><b>Email:</b> {user.email}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Axios;