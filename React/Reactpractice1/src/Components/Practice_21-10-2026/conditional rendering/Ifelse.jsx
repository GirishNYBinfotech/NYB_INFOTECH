function Ifelse({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome!</p>;
  } 
  else {
    return <p>Please Login</p>;
  }
}
export default Ifelse