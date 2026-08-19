import React from 'react'
import Language from '../../Components/Practice_19-08-2026/ContextAPI/Language/Language'
import Providers from '../../Components/Practice_19-08-2026/ContextAPI/Greet/Providers'

const Contextpage = () => {
  return (
    <div>
        <Providers/>
        <h2>change Language</h2>
        <Language/>
    </div>
  )
}

export default Contextpage