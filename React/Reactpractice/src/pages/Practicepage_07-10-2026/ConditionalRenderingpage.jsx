import React from 'react'
import IfElse from '../../Components/practice_07-10-2026/ConditionalRendering/IfElse'
import And from '../../Components/practice_07-10-2026/ConditionalRendering/And'
import Ternary from '../../Components/practice_07-10-2026/ConditionalRendering/Ternary'
import Switch from '../../Components/practice_07-10-2026/ConditionalRendering/Switch'

const ConditionalRenderingpage = () => {
  return (
    <div>
        <h2>IF..ELSE</h2>
        <IfElse/>
        <And/>
        <Ternary/>
        <h2>Switch</h2>
        <Switch/>
    </div>
  )
}

export default ConditionalRenderingpage