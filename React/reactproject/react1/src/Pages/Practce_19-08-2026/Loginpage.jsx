import React from 'react'
import { Provider } from 'react-redux'
import store from '../../Components/Practice_19-08-2026/RTK/Login/store'
import Check from '../../Components/Practice_19-08-2026/RTK/Login/Check'

const Loginpage = () => {
  return (
    <div>
        <Provider store={store}>
            <Check/>
        </Provider>
    </div>
  )
}

export default Loginpage