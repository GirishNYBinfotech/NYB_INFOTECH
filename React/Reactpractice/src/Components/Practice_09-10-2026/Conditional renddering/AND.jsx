import React from "react";

function AND() {
  const isAdmin = true;

  return (
    <div>
      {isAdmin && "Welcome Admin"}
      {isAdmin || "Welcome user"}
    </div>
  );
}

export default AND;