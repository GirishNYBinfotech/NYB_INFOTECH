import React from "react";

function Switch() {
  const role = "admin";

  function showContent() {
    switch (role) {
      case "admin":
        return <p>Welcome Admin!</p>;

      case "user":
        return <p>Welcome User!</p>;

      case "guest":
        return <p>Welcome Guest!</p>;

      default:
        return <p>Invalid Role</p>;
    }
  }

  return <div>{showContent()}</div>;
}

export default Switch