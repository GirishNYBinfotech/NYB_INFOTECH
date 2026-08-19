import { useSelector } from "react-redux";

function Navbar() {
  const name = useSelector((state) => state.user.name);
  const isLoggedIn = useSelector(
    (state) => state.user.isLoggedIn
  );

  return (
    <nav>
      {isLoggedIn ? (
        <h3>Welcome {name}</h3>) : (
        <h3>Please Login</h3>
      )}
    </nav>
  );
}

export default Navbar;