import { useEffect, useState } from "react";

function Withoutarray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is running");
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Withoutarray