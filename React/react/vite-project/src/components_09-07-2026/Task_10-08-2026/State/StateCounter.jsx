import { useState } from "react";

function StateCounter() {
  const [count, setCount]=useState(0)

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  );
}

export default StateCounter;