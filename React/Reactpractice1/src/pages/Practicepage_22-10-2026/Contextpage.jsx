import React from 'react'
import Provider from '../../Components/Practice_22-10-2026/Context/Providers'
import Consumers from '../../Components/Practice_22-10-2026/Context/Consumers'

const Contextpage = () => {
  return (
    <div>
       <Provider>
        <Consumers/>
        </Provider>
    </div>
  )
}

export default Contextpage