import React from 'react'

const Switch = () => {
    let user="Guest"
  switch (user) {
    case "Guest":
        return <h3>Hello Guest</h3>
    case "admin":
        return <h3>Hello admin</h3>
    default:
        return <h3>please enter valid user</h3>
  }
}

export default Switch