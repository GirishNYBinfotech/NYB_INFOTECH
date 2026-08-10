import React from 'react'

const fruits = ["Apple", "Banana", "Mango", "Orange"];
const Listrendering = () => {
  return (
     <div>
      <h2>Fruits</h2>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  )
}


export default Listrendering