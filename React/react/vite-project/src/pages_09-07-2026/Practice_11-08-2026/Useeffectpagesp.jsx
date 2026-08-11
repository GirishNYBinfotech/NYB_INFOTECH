import React from 'react'
import Witharray from '../../components_09-07-2026/practice_11-08-2026/Useeffect/Witharray'
import Withoutarray from '../../components_09-07-2026/practice_11-08-2026/Useeffect/Withoutarray'
import Emptyarray from '../../components_09-07-2026/practice_11-08-2026/Useeffect/Emptyarray'

const Useeffectpagesp = () => {
  return (
    <div>
        <h2>withDependency array</h2>
        <Witharray/>
        <br/>
        <h2>WithoutDependency array</h2>
        <Withoutarray/>
        <br/>
        <h2>Empty Dependency array</h2>
        <Emptyarray/>
    </div>
  )
}

export default Useeffectpagesp