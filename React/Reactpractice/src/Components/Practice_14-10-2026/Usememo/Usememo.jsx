
import React, { useState, useMemo } from "react";

function Usememo() {
  const [number, setNumber] = useState(50000000);
  const [count, setCount] = useState(0);
  const expensiveResult = useMemo(() => {
    console.log("Expensive calculation running...");
    let total = 0
    for (let i = 1; i <= number; i++) {
      total += i;
    }
    return total;
  }, [number]);

  return (
    <div>
      <h2>useMemo </h2>
      <h3>Sum: {expensiveResult}</h3>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
      <hr />
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Usememo;
