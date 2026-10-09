import { useContext } from "react";
import { UserContext } from "./ContextApi";

function Consumer() {
  const username=useContext(UserContext);

  return <h1>Hello,{username}</h1>;
}
export default Consumer