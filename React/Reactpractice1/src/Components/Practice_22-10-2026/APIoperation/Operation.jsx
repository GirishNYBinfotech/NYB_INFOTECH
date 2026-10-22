import { useEffect, useState } from "react";

function Operation() {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);

  // GET
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // POST
  const addUser = async () => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    const data = await res.json();
    setUsers([...users, data]);
    setName("");
    setEmail("");
  };

  // PUT
  const updateUser = async () => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    const data = await res.json();
    setUsers(users.map(user =>
      user.id === id ? { ...user, ...data, id } : user
    ));
    setId(null);
    setName("");
    setEmail("");
  };

  // PATCH
  const patchUser = async (userId) => {
    const res = await fetch(`${API}/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    setUsers(users.map(user =>
      user.id === userId ? { ...user, ...data } : user
    ));
  };

  // DELETE
  const deleteUser = async (userId) => {
    await fetch(`${API}/${userId}`, {
      method: "DELETE"
    });

    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h2>User Form</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={id ? updateUser : addUser}>
        {id ? "PUT Update" : "POST Add"}
      </button>

      <h3>User List</h3>

      {users.map(user => (
        <div key={user.id}>
          {user.name} - {user.email}{" "}

          <button onClick={() => {
            setId(user.id);
            setName(user.name);
            setEmail(user.email);
          }}>
            Edit
          </button>

          <button onClick={() => patchUser(user.id)}>
            PATCH
          </button>

          <button onClick={() => deleteUser(user.id)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}

export default Operation