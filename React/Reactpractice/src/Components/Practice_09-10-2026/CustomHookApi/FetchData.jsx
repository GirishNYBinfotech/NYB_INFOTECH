import React from "react";
import useCustomHook from "./CustomHook";


function FetchData() {
  const { data, loading, error } = useCustomHook("https://jsonplaceholder.typicode.com/users")

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>User List</h1>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchData