import React,{ useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData,[name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      Name:<input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <br/><br/>

      Email:<input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <br/><br/>
      Ph no;<input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <br/><br/>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UserForm