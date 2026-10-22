import { useState, useEffect } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Girish");

  // No dependency array
  useEffect(() => {
    console.log("Runs after every render");
  });

  // Empty dependency array
  useEffect(() => {
    console.log(" Runs after mount");

    return () => {
      console.log(" Cleanup on unmount");
    };
  }, []);

  // Dependency array with count
  useEffect(() => {
    console.log(" Runs when count changes");
  }, [count]);

  // Dependency array with name
  useEffect(() => {
    console.log("Runs when name changes");
  }, [name]);

  // Multiple dependencies
  useEffect(() => {
    console.log(" Runs when count OR name changes");
  }, [count, name]);

  return (
    <div>
      <h2>useEffect Examples</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <h3>Name: {name}</h3>
      <button onClick={() =>
          setName(name === "Girish" ? "Rahul" : "Girish")
        }>
        Change Name
      </button>
    </div>
  );
}

export default Useeffect;
