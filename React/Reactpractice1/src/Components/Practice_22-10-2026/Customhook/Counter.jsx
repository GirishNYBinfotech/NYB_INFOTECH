import useCounter from "./Usecounter";

function Counter() {
  const { count, increment, decrement, reset } =useCounter(0);

  return (
    <div>
        <h1>Counter1</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;