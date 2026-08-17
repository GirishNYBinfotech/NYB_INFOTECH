import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    setError("");
    alert("Form submitted successfully");
  };

  return (
    <>
    <h2>Validating </h2>
    <form onSubmit={handleSubmit}>
        <label>name: </label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      {error && <p>{error}</p>}
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Form;