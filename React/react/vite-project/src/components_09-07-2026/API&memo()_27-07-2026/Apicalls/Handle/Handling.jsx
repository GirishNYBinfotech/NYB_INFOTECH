import React, { useState } from "react";

function Handling() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const api = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(api)
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result.slice(0, 5));
    } 
    catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>API Loading Example</h2>
      <button onClick={getData}>Get Data</button>
      <br /><br />
      {loading && <h3>Loading...</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {!loading &&
        !error &&
        data.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
          </div>
        ))}
    </div>
  );
}

export default Handling