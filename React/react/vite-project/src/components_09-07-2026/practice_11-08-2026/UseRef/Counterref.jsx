import { useRef } from "react";

function Counterref() {
  const countRef = useRef(0);

  const increaseCount = () => {
    countRef.current = countRef.current + 1
    console.log("Count:", countRef.current)
  };
  console.log("Component rendered")

  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default Counterref