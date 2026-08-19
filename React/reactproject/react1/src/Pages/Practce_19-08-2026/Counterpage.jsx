import React from 'react'
import { Provider } from 'react-redux'
import store from '../../Components/Practice_19-08-2026/RTK/Counter/Store'
import Counter from '../../Components/Practice_19-08-2026/RTK/Counter/Counter'

const Counterpage = () => {
  return (
    <div>
        <Provider store={store}>
          <Counter/>
        </Provider>

    </div>
  )
}

export default Counterpage