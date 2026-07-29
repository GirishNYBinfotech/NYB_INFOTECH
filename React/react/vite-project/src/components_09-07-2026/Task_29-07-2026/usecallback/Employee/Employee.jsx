import React from "react";

const Employee = React.memo(({ name, onPromote }) => {
  console.log(name, "Rendered");
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={onPromote}>Promote</button>
    </div>
  );
});

export default Employee;