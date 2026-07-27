import React from 'react'
import WithMemo from '../../../components_09-07-2026/API&memo()_27-07-2026/Memo()/compare/WithMemo'
import WithoutMemo from '../../../components_09-07-2026/API&memo()_27-07-2026/Memo()/compare/WithoutMemo'

const Compare = () => {
  return (
    <div>
        <h3>WithoutMemo</h3>
        <WithoutMemo/>
        <h3>WithMemo</h3>
        <WithMemo/>
    </div>
  )
}

export default Compare