import React from 'react'

const Parent = () => {
  return (
    <Child name="girish"
    location="Hyd"/>
  )
}

const Child = (props) => {

  return (
    <div>
      <h2>name:{props.name}</h2>
      <h2>location:{props.location}</h2>
    </div>
  )
}


export default Parent