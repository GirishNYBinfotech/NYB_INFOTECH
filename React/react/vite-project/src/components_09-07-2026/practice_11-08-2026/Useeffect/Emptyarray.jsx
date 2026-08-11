import { useEffect, useState } from "react";

function Emptyarray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is running with emptydependency array");
  }, []);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Emptyarray