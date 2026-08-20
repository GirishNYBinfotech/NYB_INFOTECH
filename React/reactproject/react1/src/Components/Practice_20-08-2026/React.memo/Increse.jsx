import React, { useState } from "react";

const Child = React.memo(function Child({ count }) {
  console.log("Child rendered")

  return (
    <div>
      <h2>Child Count: {count}</h2>
    </div>
  )
})

function Increse() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <h2>Parent Count:{count}</h2>
      <Child count={count}/>
    </div>
  );
}

export default Increse