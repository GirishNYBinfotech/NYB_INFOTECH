import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name="Girish" />
    </div>
  );
}

export default Parent;