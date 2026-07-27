import React from "react";

function ChildCard({ user }) {
    console.log("Child Rendered:", user.name)
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default React.memo(ChildCard)