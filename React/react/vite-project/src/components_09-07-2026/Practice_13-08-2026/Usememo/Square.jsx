import React, { useMemo, useState } from "react";

function Square() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const square = useMemo(() => {
    console.log("Calculating square...");

    return number * number;
  }, [number])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>
  );
}

export default Square