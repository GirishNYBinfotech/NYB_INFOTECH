import { useState } from "react";

function Rerendering() {
  const [count, setCount] = useState(0);
  console.log("rendered");
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child />
    </div>
  );
}

function Child() {
  console.log("Child rendered");
  return <p>child component</p>;
}

export default Rerendering