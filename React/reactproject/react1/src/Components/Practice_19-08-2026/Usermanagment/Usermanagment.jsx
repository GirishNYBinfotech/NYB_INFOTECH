import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./UserSlice";

function Usermanagment() {

  // Get data from Redux store
  const users = useSelector(state => state.users.users);

  // Send actions to Redux
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: "John",
      email: "john@gmail.com"
    };

    dispatch(addUser(newUser));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h1>User Management System</h1>

      <button onClick={handleAddUser}>
        Add User
      </button>

      <h2>Users</h2>

      {users.map(user => (
        <div key={user.id}>
          <p>
            {user.name} - {user.email}
          </p>

          <button onClick={() => handleDeleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Usermanagment