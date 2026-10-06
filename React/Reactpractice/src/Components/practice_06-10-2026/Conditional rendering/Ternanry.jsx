import React from 'react'

const Ternanry = () => {
    let age=17
  return (
    <div>
        {age>18?<p>eligible to vote</p>:<p>not eligibleto vote must be above 18</p>}
    </div>
  )
}

export default Ternanry