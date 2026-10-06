import React from 'react'
import Child from './child'

const Parent = () => {
    const skills=["HTML","CSS","JavaScript"]
    const student={
    name:"Girish",
    age:25
    }
    function showMessage() {
        alert("Hello Girish")
    }
  return (
    <>
    <Child name="girish"
    age={25}
    skills={skills}
    data={student}
    handleClick={showMessage} />
    </>
  )
}

export default Parent