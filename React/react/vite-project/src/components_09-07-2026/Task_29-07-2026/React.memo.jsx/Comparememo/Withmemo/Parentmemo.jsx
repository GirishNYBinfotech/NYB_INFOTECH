import React, { useState } from "react";
import Studentmemo from "./Studentmemo";

function Parentmemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Studentmemo
        name="Rahul"
        course="React JS"
      />
    </div>
  );
}

export default Parentmemo