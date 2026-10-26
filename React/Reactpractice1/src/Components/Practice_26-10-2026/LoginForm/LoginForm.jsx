import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Enter a valid email");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Form submitted successfully!");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>

      {error && <p role="alert">{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
}

export default LoginForm;