import React from "react";

function Parameters() {
  const student = (name, age) => {
    alert(`Name: ${name}, Age: ${age}`);
  }

  return (
    <>
    <h2>click here to show details</h2>
    <button onClick={() => student("Girish", 24)}>Show Details</button>
    </>
  )
}

export default Parameters