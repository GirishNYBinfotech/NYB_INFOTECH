import React from 'react'
import BooleanState from '../../components_09-07-2026/Task_10-08-2026/State/BooleanState'
import StringState from '../../components_09-07-2026/Task_10-08-2026/State/StringState'
import Objectstate from '../../components_09-07-2026/Task_10-08-2026/State/Objectstate'
import Arraystate from '../../components_09-07-2026/Task_10-08-2026/State/Arraystate'

const Statespages = () => {
  return (
    <div>
        <h3>String</h3>
        <StringState/>
        <h3>Objectstate</h3>
        <Objectstate/>
        <h3>Arraystate</h3>
        <Arraystate/>
         <h3>boolean state</h3>
        <BooleanState/>
    </div>
  )
}

export default Statespages