import React,{ useState } from "react";
const To = React.memo(function To({ task }) {
  console.log("Todo rendered:", task)

  return (
    <div>
      <h3>{task}</h3>
    </div>
  )
})
function Todo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <h2>Count: {count}</h2>
      <To task="Learn React" />
    </div>
  );
}

export default Todo