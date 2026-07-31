import React, { useState } from "react";

function Objectstate() {
  const [employee] = useState({
    id: 101,
    name: "Rahul",
    salary: 50000,
  });

  const {id,name,salary}=employee

  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Salary: Rs{salary}</h2>
    </div>
  );
}

export default Objectstate