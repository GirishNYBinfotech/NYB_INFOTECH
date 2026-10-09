import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserRole() {
  const { user } = useContext(UserContext);

  return <h2>Role: {user.role}</h2>;
}

export default UserRole;