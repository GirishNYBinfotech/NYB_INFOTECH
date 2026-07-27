import React, { useState } from "react";

const Child = React.memo(() => {
  console.log("Child Rendered");
  return <h2>Child Component</h2>;
})

function WithMemo() {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child />
    </>
  );
}

export default WithMemo