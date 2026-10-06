import React from 'react'
import IFELSE from '../../../Components/practice_06-10-2026/Conditional rendering/IFELSE'
import Ternanry from '../../../Components/practice_06-10-2026/Conditional rendering/Ternanry'
import And from '../../../Components/practice_06-10-2026/Conditional rendering/AND'
import Switch from '../../../Components/practice_06-10-2026/Conditional rendering/Switch'

const Conditionalpage = () => {
  return (
    <div>
        <h1>Conditional Rendering</h1>
        <h2>Ifelse</h2>
        <IFELSE/>
        <h2>Ternary operator</h2>
        <Ternanry/>
        <h2>And operator</h2>
        <And/>
        <h2>Switch</h2>
        <Switch/>
    </div>
  )
}

export default Conditionalpage