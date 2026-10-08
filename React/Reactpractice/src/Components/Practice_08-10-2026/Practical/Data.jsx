import React, { useEffect, useState } from "react";

function Data() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        setUsers([
          { id: 1, name: "John", email: "john@gmail.com", role: "Admin" },
          { id: 2, name: "David", email: "david@gmail.com", role: "User" },
          { id: 3, name: "King", email: "King@gmail.com", role: "User" },
        ])
        setLoading(false);
      }, 1000);
    } 
    catch (err) {
      setError("Failed to load users");
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please enter name and email");
      return;
    }

    if (editId) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? { ...user, name, email, role }
            : user
        )
      );

      setEditId(null);
    } 
    else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        role,
      };

      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
    setRole("User");
    setError("");
  };


  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


  const editUser = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || user.role === filter;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        <button type="submit">
          {editId ? "Update User" : "Add User"}
        </button>
      </form>
      <hr />

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <h2>User List</h2>
      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email} -{" "}
              {user.role}
              <button onClick={() => editUser(user)}>
                Edit
              </button>
              <button onClick={() => deleteUser(user.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Data