import React from "react";

function Child1({ sendData }) {
  return (
    <button onClick={() => sendData("Hello from Child A!")}>
      Send Message
    </button>
  );
}

export default Child1;