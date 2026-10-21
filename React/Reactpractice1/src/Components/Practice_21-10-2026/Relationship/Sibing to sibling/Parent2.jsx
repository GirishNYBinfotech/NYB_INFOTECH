import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent2() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>
      <Child1 sendData={setMessage} />
      <Child2 message={message} />
    </div>
  );
}

export default Parent2;