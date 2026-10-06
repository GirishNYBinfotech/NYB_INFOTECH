import React from 'react'
import Parent1 from '../../../Components/practice_06-10-2026/datasending/child to parent/Parent1'
import Parent from '../../../Components/practice_06-10-2026/datasending/Props/parent'
import Parent2 from '../../../Components/practice_06-10-2026/datasending/Siblings/Parent2'


const Propspage = () => {
  return (
    <div>
        <h2>props</h2>
        <h5>parent to child</h5>
        <Parent/>
        <h2>child to parent</h2>
        <Parent1/>
        <h2>sibling to sibling</h2>
        <Parent2/>
    </div>
  )
}

export default Propspage