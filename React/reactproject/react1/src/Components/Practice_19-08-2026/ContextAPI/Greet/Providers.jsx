import React from 'react'
import { Con } from './Context'
import Consumer from './consumer'

const Providers = () => {
    let User ="girish"
  return (
    <Con.Provider value={User}>
        <Consumer/>
    </Con.Provider>
  )
}

export default Providers