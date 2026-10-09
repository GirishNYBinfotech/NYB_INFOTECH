import React from 'react'
import Employee  from '../../Components/Practice_09-10-2026/EmployeeManagment/Employee'
import EmployeeProvider from '../../Components/Practice_09-10-2026/EmployeeManagment/EmployeeContext'

const Employeepages = () => {
  return (
    <div>
        <EmployeeProvider>
          <Employee/>
        </EmployeeProvider>
    </div>
  )
}

export default Employeepages