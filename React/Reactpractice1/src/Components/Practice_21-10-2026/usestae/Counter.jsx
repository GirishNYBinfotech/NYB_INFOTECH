import React, { useState } from 'react'

const Counter = () => {
    let [count,setcount]=useState(0)
  return (
    <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={()=>setcount(count+1)}>inc +</button>
        <button onClick={()=>setcount(count-1)}>inc -</button>
        <button onClick={()=>setcount(0)}>reset</button>
    </div>
  )
}

export default Counter