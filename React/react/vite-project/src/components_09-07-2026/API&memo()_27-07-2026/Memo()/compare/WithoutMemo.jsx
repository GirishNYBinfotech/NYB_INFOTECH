import React, { useState } from "react";

function Child() {
  console.log("Child Rendered");
  return <h2>Child Component</h2>;
}

function WithoutMemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child />
    </>
  );
}

export default WithoutMemo