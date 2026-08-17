import { useState } from "react";

function Multipleinputs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <h2>Login page</h2>
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <br/>
      <br/>
      <label>Email: </label>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <br/>
      <br/>
      <label>Password: </label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Multipleinputs