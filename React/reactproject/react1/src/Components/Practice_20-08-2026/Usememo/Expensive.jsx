import { useMemo, useState } from "react";

function Expensive() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculation running...")

    let result = 0;
    for (let i=0;i<100000000;i++){
      result +=number
    }

    return result
  }, [number])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}> Increase Count</button>
      <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number+1)}>Increase Number</button>

      <h2>Result: {expensiveCalculation}</h2>
    </div>
  );
}

export default Expensive