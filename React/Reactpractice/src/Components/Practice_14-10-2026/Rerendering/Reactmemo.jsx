import { memo, useState } from "react";

const Child = memo(function Child() {
  console.log("Child rendered");
  return <p>Child Component</p>;
});

function Reactmemo() {
  const [count, setCount] = useState(0);
  console.log(" rendering memo");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child />
    </>
  );
}

export default Reactmemo;