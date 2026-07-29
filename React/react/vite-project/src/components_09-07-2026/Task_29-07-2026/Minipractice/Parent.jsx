import React, { useState, useMemo, useCallback } from "react";
import NormalChild from "./NormalChild";
import MemoChild from "./MemoChild";
import ExpensiveCalculation from "./ExpensiveCalculation";
import CallbackChild from "./CallbackChild";
import PureCounter from "./PureCounter";

function Parent() {
  console.log("App Rendered");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }, [count]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Performance Optimization</h1>
      <hr />
      <h2>Parent Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br /><br />
      <input
        placeholder="Type Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <hr />
      <NormalChild/>
      <MemoChild/>
      <ExpensiveCalculation value={expensiveValue} />
      <CallbackChild increment={increment} />
      <PureCounter count={count} />
    </div>
  );
}

export default Parent