import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email === "") {
      newErrors.email = "Email is required"
    } 
    else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } 
    else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Registration successful");
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
          placeholder="Enter your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p>{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
          placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
          placeholder="Enter password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>

        {/* Age */}
        <div>
          <label>Age:</label>
          <input
          placeholder="Enter your Password"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}/>
          <p>{errors.age}</p>
        </div>

        {/* Phone */}
        <div>
          <label>Phone:</label>
          <input
          placeholder="Enter phone number"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}/>
          <p>{errors.phone}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;