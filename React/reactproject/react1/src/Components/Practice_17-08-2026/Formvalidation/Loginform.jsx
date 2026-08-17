import React, { useState } from "react";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}

    // Email validation
    if (email === "") {
      newErrors.email = "Email is required"
    } 
    else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email"
    }

    // Password validation
    if (password === "") {
      newErrors.password = "Password is required"
    } 
    else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    // If there are no errors
    if (Object.keys(newErrors).length === 0){
      alert("Login successful")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{errors.email}</p>
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          placeholder="enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errors.password}</p>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Loginform