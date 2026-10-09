import React from "react";

function Ternary() {
  const age = 20;

  return (
    <div>
      {age >= 18 ? (
        <h3>You are eligible to vote</h3>
      ) : (
        <h3>You are not eligible to vote</h3>
      )}
    </div>
  );
}

export default Ternary