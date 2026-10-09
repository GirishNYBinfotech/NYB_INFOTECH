import React from "react";

function IFELSE() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User!</h1>
  } else {
    return <h1>Please Login</h1>
  }
}

export default IFELSE