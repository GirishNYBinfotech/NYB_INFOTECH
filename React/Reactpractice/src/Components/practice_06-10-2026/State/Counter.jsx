import React, { useState } from 'react'

const Counter = () => {
    let [count,setcount]=useState(0)
  return (
    <div>
        <h1>counter</h1>
        <h3>{count}</h3>
        <button onClick={()=>setcount(count+1)}>
            inc +1
        </button>
        <button onClick={()=>setcount(count-1)}>
            inc -1
        </button>
        <button onClick={()=>setcount(0)}>
            reset
        </button>
    </div>
  )
}

export default Counter