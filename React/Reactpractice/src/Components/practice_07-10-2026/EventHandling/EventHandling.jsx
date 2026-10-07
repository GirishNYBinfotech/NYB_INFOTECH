import { React,useState } from "react";

function EventHandling() {
  const [name, setName] = useState("");

  function handleClick() {
    console.log("Button clicked");
  }

  function handleChange(event) {
    setName(event.target.value);
    console.log("Input changed:", event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted");
    console.log("Name:", name);
  }

  function handleKeyDown(event) {
    console.log("Key Down:", event.key);
  }

  function handleKeyUp(event) {
    console.log("Key Up:", event.key);
  }

  return (
    <div>
      <h1>Event Handling</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder="Enter your name"
        />
        <br /><br />
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
        <button type="submit">
          Submit
        </button>
      </form>

      <h2>Name: {name}</h2>
    </div>
  );
}

export default EventHandling