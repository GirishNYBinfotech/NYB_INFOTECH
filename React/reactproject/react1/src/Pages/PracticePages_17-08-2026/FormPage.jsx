import React from 'react'
import CInput from '../../Components/Practice_17-08-2026/FormHandling/Controlled/CInput'
import UInput from '../../Components/Practice_17-08-2026/FormHandling/Uncontrolled/UInput'

const FormPage = () => {
  return (
    <div>
        <h2>Controled Component</h2>
        <CInput/>
        <h2>Uncontrolled Component</h2>
        <UInput/>
    </div>
  )
}

export default FormPage