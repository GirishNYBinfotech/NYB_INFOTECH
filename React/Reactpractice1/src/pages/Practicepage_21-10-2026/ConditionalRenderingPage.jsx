import React from 'react'
import AND from '../../Components/Practice_21-10-2026/conditional rendering/AND'
import Ifelse from '../../Components/Practice_21-10-2026/conditional rendering/Ifelse'
import Ternaryoperator from '../../Components/Practice_21-10-2026/conditional rendering/Ternaryoperator'
import Switch from '../../Components/Practice_21-10-2026/conditional rendering/Switch'

const ConditionalRenderingPage = () => {
  return (
    <div>
        <h2>AND</h2>
        <AND/>
        <h2>IFelsa</h2>
        <Ifelse/>
        <h2>Ternary operator</h2>
        <Ternaryoperator/>
        <h2>Switch</h2>
        <Switch/>
    </div>
  )
}

export default ConditionalRenderingPage