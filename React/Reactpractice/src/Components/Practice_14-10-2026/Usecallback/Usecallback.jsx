import { useState, useCallback } from "react";

function Usecallback() {
  const [name, setName] = useState("");

  const handleSubmit = useCallback(() => {
    console.log("Registered user:", name);
  }, [name]);

  return (
    <div>
        <h2>Registraction form</h2>
      <input
      type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default Usecallback