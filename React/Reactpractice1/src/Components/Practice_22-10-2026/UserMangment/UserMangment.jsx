import { useState } from "react";
import useUsers from "./hooks/useUsers";

export default function UserMangment() {
  const {users,loading,error,addUser,editUser,deleteUser } = useUsers();

  const [search, setSearch] = useState("")
  const [domain, setDomain] = useState("all")
  const [selected, setSelected] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesDomain =domain === "all" ||user.email.endsWith(`.${domain}`)
    return matchesSearch && matchesDomain;
  })

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    if (editingId !== null) {
      const oldUser = users.find(
        (user) => user.id === editingId
      );

      editUser({ ...oldUser, name, email });
    } else {
      addUser({ name, email });
    }
    setName("")
    setEmail("")
    setEditingId(null)
  }

  function handleEdit(user) {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setSelected(null);
  }

  if (loading) return <h2>Loading users...</h2>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>User Management</h1>

      {/* Add User / Edit User */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          {editingId !== null ? "Update User" : "Add User"}
        </button>

        {editingId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setEmail("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* Search */}
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      >
        <option value="all">All email domains</option>
        <option value="com">.com</option>
        <option value="biz">.biz</option>
        <option value="org">.org</option>
        <option value="info">.info</option>
      </select>

      {/* User List */}
      <h2>User List ({filteredUsers.length})</h2>

      {filteredUsers.length === 0 && <p>No users found.</p>}

      {filteredUsers.map((user) => (
        <div className="user" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => setSelected(user)}>
            Details
          </button>

          <button onClick={() => handleEdit(user)}>
            Edit
          </button>

          <button
            onClick={() => {
              if (window.confirm("Delete this user?")) {
                deleteUser(user.id);

                if (selected?.id === user.id) {
                  setSelected(null);
                }
              }
            }}
          >
            Delete
          </button>
        </div>
      ))}

      {/* User Details */}
      {selected && (
        <div className="details">
          <h2>User Details</h2>
          <p>ID: {selected.id}</p>
          <p>Name: {selected.name}</p>
          <p>Email: {selected.email}</p>

          {selected.address && (
            <p>City: {selected.address.city}</p>
          )}

          <button onClick={() => setSelected(null)}>
            Close Details
          </button>
        </div>
      )}
    </div>
  );
}