import React from 'react'

const Jsxexpression = () => {
    const name = "Girish"
    const a = 10;
    const b=20;
    const age=25
  return (
    <div>
        <h1>Hello, {name}</h1>
        <h2>Sum:{a+b}</h2>
        {age >=18?<p>Eligible to vote</p>:<p>Not eligible to vote</p>}
    </div>
  )
}

export default Jsxexpression