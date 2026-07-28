import UseApi from "./UseApi";

function Users() {
  const { data, loading, error } = UseApi("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h2>Loading Users...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Users</h2>

      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users

