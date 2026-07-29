import { useMemo, useState } from "react";

function Withusememo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const square = useMemo(() => {
    console.log("Calculating...");
    let i = 0;
    while (i < 100000000) i++;
    return count * count;
  }, [count]);

  return (
    <>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default Withusememo