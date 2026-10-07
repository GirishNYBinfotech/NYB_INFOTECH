import React,{ useEffect, useState } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Girish");

  useEffect(() => {
    console.log("Component rendered");
  });
//   useEffect(() => {
//     console.log("Component rendered once at intial");
//   },[]);
//   useEffect(() => {
//     console.log("Component rendered when count is clicked");
//   },[name]);
//   useEffect(() => {
//     console.log("Component rendered when count is clicked");
//   },[count,name]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <h1>{name}</h1>
      <button onClick={() => setName("King")}>
        Change Name
      </button>
    </div>
  );
}

export default Useeffect