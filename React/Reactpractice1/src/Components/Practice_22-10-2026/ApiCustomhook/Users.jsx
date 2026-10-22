import useFetch from "./UseFetch";

function Users() {
  const {data: users,loading,error} = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>User Details</h1>

      {users && users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;