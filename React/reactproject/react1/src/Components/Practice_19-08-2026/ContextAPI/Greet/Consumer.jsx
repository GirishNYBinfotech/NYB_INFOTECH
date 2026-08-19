import React, { useContext } from 'react'
import { Con } from './Context'

const Consumer = () => {
    let User =useContext(Con)
  return (
    <div>Hello,{User}</div>
  )
}

export default Consumer