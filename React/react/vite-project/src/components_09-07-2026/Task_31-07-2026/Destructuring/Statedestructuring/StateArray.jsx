import React, { useState } from "react";

function StateArray() {
  const [fruits] = useState(["Apple", "Banana", "Mango"])

  // Destructuring the array
  const [first, second, third] = fruits

  return (
    <div>
      <h2>{first}</h2>
      <h2>{second}</h2>
      <h2>{third}</h2>
    </div>
  )
}

export default StateArray