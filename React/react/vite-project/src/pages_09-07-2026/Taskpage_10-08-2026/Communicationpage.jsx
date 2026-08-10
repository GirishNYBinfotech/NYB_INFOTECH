import React from 'react'
import ChildtoParent from '../../components_09-07-2026/Task_10-08-2026/ChildtoParent/ChildtoParent'
import ChildtoChild from '../../components_09-07-2026/Task_10-08-2026/ChildtoParent/ChildtoChild'

const Communicationpage = () => {
  return (
    <div>
        <h2>child to parent</h2>
        <ChildtoParent/>
        <h2>Child to Child</h2>
        <ChildtoChild/>
    </div>
  )
}

export default Communicationpage