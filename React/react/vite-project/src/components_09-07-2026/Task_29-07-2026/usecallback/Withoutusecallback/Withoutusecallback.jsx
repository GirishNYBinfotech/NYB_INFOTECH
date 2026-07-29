import React, { useState } from "react";
import Child from "./Child";

function Withoutusecallback() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button Clicked");
  };

  console.log("Parent Render");

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Withoutusecallback