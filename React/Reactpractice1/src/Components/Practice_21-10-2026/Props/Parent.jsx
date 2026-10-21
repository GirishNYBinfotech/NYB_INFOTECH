import React from "react";
import Child from "./Child";

function Parent() {
  const hobbies = ["Cricket", "Reading"];
  const user = {
    name: "Rahul",
    age: 25
  };
  function greet() {
    alert("Hello Rahul!");
  }

  return (
    <div>
      <Child
        name="Rahul"
        age={25}
        isStudent={true}
        hobbies={hobbies}
        user={user}
        greet={greet}
      />
    </div>
  );
}

export default Parent;
