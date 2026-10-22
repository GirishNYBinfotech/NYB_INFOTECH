import useCounter from "./Usecounter";

function AnotherCounter() {
  const { count, increment } = useCounter(10);

  return (
    <div>
      <h2>Another Count: {count}</h2>
      <button onClick={increment}>
        Increase
      </button>
    </div>
  );
}

export default AnotherCounter;