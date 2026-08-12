import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../components_09-07-2026/Practice_12-08-2026/Reduxtoolkit/Student/Store'
import Students from '../../components_09-07-2026/Practice_12-08-2026/Reduxtoolkit/Student/Students'

const StudentsPageM = () => {
  return (
    <div>
        <Provider store={store}>
            <Students/>
        </Provider>
    </div>
  )
}

export default StudentsPageM