import React from "react";

function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent!")}>
      Send Data to Parent
    </button>
  );
}

export default Child;