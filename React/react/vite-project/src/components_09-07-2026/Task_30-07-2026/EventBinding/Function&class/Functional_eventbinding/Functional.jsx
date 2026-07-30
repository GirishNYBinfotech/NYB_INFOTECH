import React, { useState } from "react";

function Functional() {

  const [name, setName] = useState("")
  const handleChange = (event) => {
    setName(event.target.value)
  }
  const greet = (name) => {
    alert("Hello " + name)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <h2>{name}</h2>
      <button onClick={() => greet(name)}>
        Say Hello
      </button>
    </div>
  )
}

export default Functional