import React from 'react'
import Usermanagment from '../../Components/Practice_19-08-2026/Usermanagment/Usermanagment'
import { Provider } from 'react-redux'
import store from '../../Components/Practice_19-08-2026/Usermanagment/store'

const Usermanagmentpage = () => {
  return (
    <div>
        <Provider store={store}>
            <Usermanagment/>
        </Provider>
    </div>
  )
}

export default Usermanagmentpage