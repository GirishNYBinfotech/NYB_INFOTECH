import { useState } from "react";

function Controlledforms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data:", formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        required
      />
      <br />
      <label>Email:</label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
        required
      />
      <br />
      <label>Gender:</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <br/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Controlledforms;