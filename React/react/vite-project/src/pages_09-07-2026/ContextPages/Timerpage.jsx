import React from 'react'
import Timer from '../../components_09-07-2026/Practice_12-08-2026/Tasks/Timer'
import { Provider } from 'react-redux'
import { store } from '../../components_09-07-2026/Practice_12-08-2026/Tasks/store'

const Timerpage = () => {
  return (
    <div>
       <Provider store={store}>
         <Timer/>
       </Provider>
    </div>
  )
}

export default Timerpage