import React, { useReducer } from 'react'

const reduser = (state,action) => {
  switch(action.type){
    case "increment":
        return {count:state.count+1};
    case "decrement":
        return {count:state.count-1}
    case "reset":
        return {count:0};
    default:
        return state
  }
}

function Usereduser(){
    const [state,dispatch]=useReducer(reduser,{count:0})
    return (
        <div>
            <h1>counter</h1>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:"increment"})}>inc</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Dec</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
}

export default Usereduser