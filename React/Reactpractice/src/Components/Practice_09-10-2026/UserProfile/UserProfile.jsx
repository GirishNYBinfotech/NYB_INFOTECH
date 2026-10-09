import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext)
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <button
        onClick={() =>setUser({ ...user,name:"Rahul"})}>
        Change Name
      </button>
    </div>
  );
}

export default UserProfile