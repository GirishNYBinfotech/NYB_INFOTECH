import React from "react";

function Inline_eventhandling() {

  function greet() {
    console.log("Hello,this inline Event handling");
  }

  return (
    <button onClick={() => greet()}>
      Click Me
    </button>
  );
}

export default Inline_eventhandling 