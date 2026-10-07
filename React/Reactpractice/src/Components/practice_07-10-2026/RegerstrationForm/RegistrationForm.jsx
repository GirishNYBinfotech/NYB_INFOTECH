import { useEffect, useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    console.log("User list", users);
  }, [users]);

  // Input Handling
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form Handling
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.age === ""
    ) {
      setError("Please fill all fields");
      return;
    }

    setError("");

    // Edit existing user
    if (editId !== null) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? {
                ...user,
                name: formData.name,
                email: formData.email,
                age: formData.age
              }
            : user
        )
      );

      setEditId(null);
    } 
    // Add new user
    else {
      setUsers([
        ...users,
        {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
          age: formData.age
        }
      ]);
    }

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: ""
    });
  };

  // Edit User
  const handleEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age
    });

    setEditId(id);
  };

  // Delete User
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          {editId !== null ? "Update" : "Register"}
        </button>
      </form>
      {error && <p>{error}</p>}

      <hr />

      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users registered</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.age}
              <button onClick={() => handleEdit(user.id)}>
                Edit
              </button>
              <button onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistrationForm