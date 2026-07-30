import React, { useState } from "react";

function AllEvents() {
  const [name, setName] = useState("");
  // onChange
  const handleChange = (event) => {
    setName(event.target.value);
  }
  // onClick
  const handleClick = () => {
    alert("Button Clicked!");
  }
  // onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted by " + name);
  }
  // onFocus
  const handleFocus = () => {
    console.log("Input Focused");
  }
  // onBlur
  const handleBlur = () => {
    console.log("Input Lost Focus")
  }
  return (
    <div >
      <h2>React Events Example</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <br />
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <br /><br />
        <button type="button" onClick={handleClick}>Click Me</button>
        <button type="submit">Submit</button>
      </form>
      <br />
      <h3>Current Name: {name}</h3>
    </div>
  );
}

export default AllEvents;