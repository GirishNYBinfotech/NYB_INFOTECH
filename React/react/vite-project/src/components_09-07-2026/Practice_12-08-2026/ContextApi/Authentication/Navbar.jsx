import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (<h2>Welcome User</h2>) :(
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default Navbar