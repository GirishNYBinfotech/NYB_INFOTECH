import useCounter from "./UseCounter";

function Counter() {
  const { count,increment,decrement,reset}=useCounter(10)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>increse</button>
      <button onClick={decrement}>decrese</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter