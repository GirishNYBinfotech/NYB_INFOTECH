import { useState } from "react";

function ChildtoParent() {
  const [message, setMessage] = useState("");

  function receiveMessage(msg) {
    setMessage(msg);
  }
  return (
    <>
      <h1>{message}</h1>
      <Child sendMessage={receiveMessage}/>
    </>
  )
}

function Child({ sendMessage }) {
  return (
    <button onClick={()=>sendMessage("Hello from Child")}>Send Message</button>
  )
}

export default ChildtoParent;