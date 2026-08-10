import { useState } from "react";

function Objectstate() {
  const [user, setUser] = useState({
    name: "Girish",
    age: 25,
    city: "Vijayawada"
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Rahul"
    });
  };

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Objectstate