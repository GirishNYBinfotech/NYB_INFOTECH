import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <h3>Hello, {name}</h3>
    </div>
  );
}

export default OnChange