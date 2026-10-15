import usecounter from "./Usecounter";


function Counter() {
  const { count, increment, decrement, reset } = usecounter();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
