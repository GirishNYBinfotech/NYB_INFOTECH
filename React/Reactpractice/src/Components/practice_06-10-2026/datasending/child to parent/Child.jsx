import React from "react";

function Child({ sendData }) {
  const handleClick = () => {
    sendData("Hello from Child");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Send Data to Parent
      </button>
    </div>
  )
}
export default Child