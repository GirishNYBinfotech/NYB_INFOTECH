import React from "react";

function Child({ name, age, isStudent, hobbies, user, greet }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>

      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <h3>User Details:</h3>
      <p>{user.name}</p>
      <p>{user.age}</p>

      <button onClick={greet}>Click Me</button>
    </div>
  );
}

export default Child;
