import { useMemo, useState } from "react";

function Withoutusememo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const square = () => {
    console.log("Calculating...");
    let i = 0;
    while (i < 100000000) i++;
    return count * count;
  }
  return (
    <>
      <h2>{square()}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default Withoutusememo