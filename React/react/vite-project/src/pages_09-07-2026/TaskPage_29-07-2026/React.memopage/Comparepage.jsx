import React from 'react'
import Parent from '../../../components_09-07-2026/Task_29-07-2026/React.memo.jsx/Comparememo/Withoutmemo/Parent'
import Parentmemo from '../../../components_09-07-2026/Task_29-07-2026/React.memo.jsx/Comparememo/Withmemo/Parentmemo'

const Comparepage = () => {
  return (
    <div>
        <h3>withoutmemo</h3>
        <Parent/>
        <h3>withmemo</h3>
        <Parentmemo/>
    </div>
  )
}

export default Comparepage