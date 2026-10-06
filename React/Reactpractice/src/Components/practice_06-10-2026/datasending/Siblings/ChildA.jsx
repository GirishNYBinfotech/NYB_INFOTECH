import React from 'react'

const ChildA=({setMessage}) => {
  return (
    <button onClick={() => setMessage("Hello from Child A")}>
      Send Message
    </button>
  )
}

export default ChildA