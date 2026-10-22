import React, { useEffect, useState } from "react";

function API() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch data from API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://jsonplaceholder.typicode.com/users")

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Search, filter, and sort
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((user) =>
      company === "All" ? true : user.company.name === company
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // Loading state
  if (loading) {
    return <h2>Loading users...</h2>;
  }

  // Error state
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchUsers}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Employee List</h1>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtering */}
      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        <option value="All">All Companies</option>
        {[...new Set(users.map((u) => u.company.name))].map(
          (name) => (
            <option key={name} value={name}>
              {name}
            </option>
          )
        )}
      </select>
      {/* Sorting */}
      <button onClick={() =>setSortOrder(sortOrder === "asc" ? "desc" : "asc") }>
        Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>

      {/* Empty state */}
      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.company.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default API