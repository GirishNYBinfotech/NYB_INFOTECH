import React, { useState } from "react";
import Child from "./Child";

function Parent1() {
  const [message, setMessage] = useState("");

  function getData(data) {
    setMessage(data);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <Child sendData={getData} />
      <p>Message from Child: {message}</p>
    </div>
  );
}

export default Parent1;