import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Useusers() {
  const { state, dispatch } = useContext(UserContext);

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: { ...user, id: Date.now() },
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
    addUser,
    editUser,
    deleteUser,
  };
}