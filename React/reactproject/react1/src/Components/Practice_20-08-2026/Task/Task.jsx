import React, {useState,useMemo,useCallback,lazy,Suspense} from "react";

import Child from "./Child";

const About = lazy(() => import("./About"));

function Task() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showAbout, setShowAbout] = useState(false);

  console.log("App rendered")

  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i;
    }

    return result + count;
  }, [count]);


  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Name: {name}</h3>

      <h3>Calculation Result: {expensiveCalculation}</h3>
      <Child onClick={handleChildClick} />

      <br />

      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? "Hide About" : "Show About"}
      </button>

      {showAbout && (
        <Suspense fallback={<h3>Loading About...</h3>}>
          <About />
        </Suspense>
      )}
    </div>
  );
}

export default Task;