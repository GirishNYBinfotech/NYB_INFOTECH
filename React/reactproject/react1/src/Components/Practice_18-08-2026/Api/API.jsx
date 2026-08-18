import { useEffect, useState } from "react";

function API() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // API call
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } 
      catch (error) {
        setError(error.message);
      } 
      finally {
        setLoading(false);
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) => {
    const searchMatch =user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const filterMatch =
      filter === "all" || user.username.toLowerCase().startsWith(filter);

    return searchMatch && filterMatch;
  });

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Users</option>
        <option value="l">Username starts with L</option>
        <option value="m">Username starts with M</option>
        <option value="e">Username starts with E</option>
      </select>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div>
          {filteredUsers.length === 0 ? (
            <p>No users found</p>
          ) : (
            filteredUsers.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <hr />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default API