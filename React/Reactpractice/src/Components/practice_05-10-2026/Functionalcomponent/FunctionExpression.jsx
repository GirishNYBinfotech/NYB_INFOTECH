import React from 'react'

const FunctionExpression = () => {
    name="Girish"
    const a=10
    const b=20
    const age=20
  return (
    <div>
        <h1>Hello {name}</h1>
        <h3>total sum:{a+b}</h3>
        <h2>capitalletters : {name.toUpperCase()}</h2>
        {age>18?"eigible you are above 18":"not eligible you are not above 18"}
    </div>
  )
}

export default FunctionExpression