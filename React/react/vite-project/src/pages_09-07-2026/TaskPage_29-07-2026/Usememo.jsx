import React from 'react'
import Withoutusememo from '../../components_09-07-2026/Task_29-07-2026/usememo/withoutusememo/Withoutusememo'
import Withusememo from '../../components_09-07-2026/Task_29-07-2026/usememo/withusememo/Withusememo'

const Usememo = () => {
  return (
    <div>
        <h3>withoutusememo</h3>
        <Withoutusememo/>
        <h3>withusememo</h3>
        <Withusememo/>
    </div>
  )
}

export default Usememo