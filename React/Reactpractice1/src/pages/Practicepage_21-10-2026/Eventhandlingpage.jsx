import React from 'react'
import OnChange from '../../Components/Practice_21-10-2026/EventHandling/OnChange'
import OnClick from '../../Components/Practice_21-10-2026/EventHandling/OnClick'
import Onsubmit from '../../Components/Practice_21-10-2026/EventHandling/Onsubmit'

const Eventhandlingpage = () => {
  return (
    <div>
      <h1>Event handling</h1>
        <h2>OnChange</h2>
        <OnChange/>
        <h2>Onclick</h2>
        <OnClick/>
        <h2>Onsubmit</h2>
        <Onsubmit/>
    </div>
  )
}

export default Eventhandlingpage