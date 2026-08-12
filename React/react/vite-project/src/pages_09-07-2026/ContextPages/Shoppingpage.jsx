import React from 'react'
import Shopping from '../../components_09-07-2026/Practice_12-08-2026/Reduxtoolkit/Shopping/Shopping'
import { Provider } from 'react-redux'
import { store } from '../../components_09-07-2026/Practice_12-08-2026/Reduxtoolkit/Shopping/store'

const Shoppingpage = () => {
  return (
    <div>
         <Provider store={store}>
            <Shopping />
        </Provider>
    </div>
  )
}

export default Shoppingpage