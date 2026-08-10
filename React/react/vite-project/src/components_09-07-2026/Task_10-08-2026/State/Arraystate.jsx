import React, { useState } from 'react'

const Arraystate = () => {
   const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, "Apple"]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Arraystate