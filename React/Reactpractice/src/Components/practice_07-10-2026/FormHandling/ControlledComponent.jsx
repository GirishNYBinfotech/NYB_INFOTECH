import React, { useState } from 'react'

const ControlledComponent = () => {
  const [number, setnumber] = useState();

  return (
    <>
    <label>mobileno:</label>
    <input
      type="number"
      value={number}
      onChange={(e) => setnumber(e.target.value)}
    />
    </>
  );
}

export default ControlledComponent