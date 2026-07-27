import React, { useState } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/posts";

  // GET
  const getData = async () => {
    try {
      const response = await fetch(api);
      const result = await response.json();
      setData(result.slice(0, 5));
    } 
    catch (error) {
      console.log(error);
    }
  };

  // POST
  const addData = async () => {
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "React",
          body: "Learning Fetch API",
          userId: 1,
        }),
      });

      const result = await response.json();
      console.log("POST:", result);
    } 
    catch (error) {
      console.log(error);
    }
  };

  // PUT
  const updateData = async () => {
    try {
      const response = await fetch(`${api}/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          title: "Updated Title",
          body: "Updated Body",
          userId: 1,
        }),
      });

      const result = await response.json();
      console.log("PUT:", result);
    } 
    catch (error) {
      console.log(error);
    }
  };

  // PATCH
  const patchData = async () => {
    try {
      const response = await fetch(`${api}/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Patched Title",
        }),
      });

      const result = await response.json();
      console.log("PATCH:", result);
    } 
    catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteData = async () => {
    try {
      const response = await fetch(`${api}/1`, {
        method: "DELETE",
      });

      console.log("DELETE Status:", response.status);
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch API CRUD Operations</h2>
      <button onClick={getData}>GET</button>{" "}
      <button onClick={addData}>POST</button>{" "}
      <button onClick={updateData}>PUT</button>{" "}
      <button onClick={patchData}>PATCH</button>{" "}
      <button onClick={deleteData}>DELETE</button>
      <hr />
      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.id}. {post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FetchAPI