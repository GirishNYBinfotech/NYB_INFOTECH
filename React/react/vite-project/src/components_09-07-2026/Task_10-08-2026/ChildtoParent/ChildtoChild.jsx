import { useState } from "react";

function ChildtoChild() {
  const [message, setMessage] = useState("");

  return (
    <>
      <ChildA sendMessage={setMessage} />
      <ChildB message={message} />
    </>
  )
}

function ChildA({ sendMessage }) {
  return (
    <button onClick={() =>sendMessage("Hello from Child A")}>Send Message</button>
  )
}

function ChildB({ message }) {
  return <h2>{message}</h2>
}

export default ChildtoChild