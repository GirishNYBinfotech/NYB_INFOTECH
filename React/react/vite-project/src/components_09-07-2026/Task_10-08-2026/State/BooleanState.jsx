import React, { useState } from 'react'

const BooleanState = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div><button onClick={() => setIsOpen(!isOpen)}>Menu</button>
{isOpen && <p>Menu is Open</p>}</div>
  )
}

export default BooleanState