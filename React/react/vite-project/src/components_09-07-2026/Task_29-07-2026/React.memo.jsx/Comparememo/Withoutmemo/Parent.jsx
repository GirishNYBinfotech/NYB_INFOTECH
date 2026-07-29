import React, { useState } from "react";
import Student from "./Student";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Student
        name="Rahul"
        course="React JS"
      />
    </div>
  );
}

export default Parent