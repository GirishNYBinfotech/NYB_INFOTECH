import React from "react";

function ConditionalRendering() {
  const loggedIn = true;
  const status = "loggedIn";

  let ifElseMessage;
  if (loggedIn) {
    ifElseMessage = <p>Welcome User</p>
  } 
  else {
    ifElseMessage = <p>Please Login</p>
  }

  let switchMessage;
  switch (status) {
    case "loggedIn":
      switchMessage = <p>Switch: Welcome User</p>;
      break;

    case "loggedOut":
      switchMessage = <p>Switch: Please Login</p>
      break;

    default:
      switchMessage = <p>Switch: Unknown Status</p>
  }

  function displayMessage() {
    if (loggedIn) {
      return <p>Function: Welcome User</p>;
    }
    return <p>Function: Please Login</p>;
  }

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h2>ifelse</h2>
      {ifElseMessage}

      <h2>Ternary Operator</h2>
      <p> {loggedIn ? "Welcome User" : "Please Login"}</p>

      <h2>Logical AND</h2>
      {loggedIn && <p>Welcome User</p>}
      <h2>Variable Based Rendering</h2>
      {loggedIn ? <p>User is Logged In</p> : <p>User is Logged Out</p>}

      <h2>Switch</h2>
      {switchMessage}

      <h2>Function</h2>
      {displayMessage()}
    </div>
  );
}

export default ConditionalRendering