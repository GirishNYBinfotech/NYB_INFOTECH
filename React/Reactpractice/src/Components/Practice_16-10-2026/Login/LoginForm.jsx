import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Enter a valid email");
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login Form</h2>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br/>

      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br />

      <button type="submit">Login</button>

      {error && <p role="alert">{error}</p>}
      {success && <p role="status">Login successful!</p>}
    </form>
  );
}

export default LoginForm;