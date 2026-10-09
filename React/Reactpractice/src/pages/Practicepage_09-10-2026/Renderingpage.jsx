import React from 'react'
import IFELSE from '../../Components/practice_06-10-2026/Conditional rendering/IFELSE'
import Switch from '../../Components/Practice_09-10-2026/Conditional renddering/Switch'
import Ternary from '../../Components/Practice_09-10-2026/Conditional renddering/Ternary'
import AND from '../../Components/Practice_09-10-2026/Conditional renddering/AND'

const Renderingpage= () => {
  return (
    <div>
        <h1>Conditional Rendering</h1>
        <h2>ifelse</h2>
        <IFELSE/>
        <h2>Switch</h2>
        <Switch/>
        <h2>AND</h2>
        <AND/>
        <h2>Ternary</h2>
        <Ternary/>
    </div>
  )
}

export default Renderingpage