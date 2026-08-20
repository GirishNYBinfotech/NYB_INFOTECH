import { useState, useCallback } from "react";

function Greet() {
  const [name, setName] = useState("Girish")
  const [count, setCount] = useState(0)

  const greetUser = useCallback(() => {
    console.log("Hello " + name)
  }, [name])

  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={greetUser}>Greet</button>
      <button onClick={() => setName("Rahul")}>Change Name</button>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default Greet