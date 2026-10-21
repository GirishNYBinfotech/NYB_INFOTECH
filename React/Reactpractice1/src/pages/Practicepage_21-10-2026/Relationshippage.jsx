import React from 'react'
import Parent from '../../Components/Practice_21-10-2026/Relationship/parent to child/Parent'
import Parent1 from '../../Components/Practice_21-10-2026/Relationship/Child to parent/Parent1'
import Parent2 from '../../Components/Practice_21-10-2026/Relationship/Sibing to sibling/Parent2'

const Relationshippage = () => {
  return (
    <div>
        <h2>parent to child</h2>
        <Parent/>
        <h2>Child to Parent</h2>
        <Parent1/>
        <h2>Child to child</h2>
        <Parent2/>
    </div>
  )
}

export default Relationshippage