import React, { useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/posts";

  // GET
  const getData = async () => {
    try {
      const response = await axios.get(api);
      setData(response.data.slice(0, 5));
    } 
    catch (error) {
      console.log(error);
    }
  };

  // POST
  const addData = async () => {
    try {
      const response = await axios.post(api, {
        title: "React",
        body: "Learning Axios",
        userId: 1,
      });

      console.log("POST:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // PUT
  const updateData = async () => {
    try {
      const response = await axios.put(`${api}/1`, {
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1,
      });

      console.log("PUT:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // PATCH
  const patchData = async () => {
    try {
      const response = await axios.patch(`${api}/1`, {
        title: "Patched Title",
      });

      console.log("PATCH:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteData = async () => {
    try {
      const response = await axios.delete(`${api}/1`);
      console.log("DELETE Status:", response.status);
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios CRUD Operations</h2>
      <button onClick={getData}>GET</button>{" "}
      <button onClick={addData}>POST</button>{" "}
      <button onClick={updateData}>PUT</button>{" "}
      <button onClick={patchData}>PATCH</button>{" "}
      <button onClick={deleteData}>DELETE</button>

      <hr />

      {data.map((post) => (
        <div key={post.id}>
          <h4>
            {post.id}. {post.title}
          </h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Axios