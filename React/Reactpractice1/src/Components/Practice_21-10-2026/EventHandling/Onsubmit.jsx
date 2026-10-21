import { useState } from "react";

function Onsubmit() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert("Submitted email: " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Onsubmit