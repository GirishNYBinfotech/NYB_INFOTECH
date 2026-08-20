import React from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>Click Child</button>
    </div>
  );
});

export default Child;