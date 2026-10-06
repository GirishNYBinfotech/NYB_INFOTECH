import React from "react";
import Child from "./Child";

function Parent1() {
  const handleData = (data) => {
    console.log("Data from Child:", data);
  }

  return (
    <div>
      <Child sendData={handleData} />
    </div>
  );
}

export default Parent1