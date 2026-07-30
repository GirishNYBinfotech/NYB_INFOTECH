import React from "react";

function Functional() {

  function greet() {
    console.log("Hello,this functional refrence");
  }

  return (
    <button onClick={greet}>
      Click Me
    </button>
  );
}

export default Functional