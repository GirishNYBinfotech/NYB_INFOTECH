import useCounter from "./CustomHook";

function Counter22() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter Two: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter22
