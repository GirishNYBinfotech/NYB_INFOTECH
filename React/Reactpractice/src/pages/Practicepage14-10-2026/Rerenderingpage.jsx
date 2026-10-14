import React from 'react'
import Rerendering from '../../Components/Practice_14-10-2026/Rerendering/Rerendering'
import Reactmemo from '../../Components/Practice_14-10-2026/Rerendering/Reactmemo'

const Rerenderingpage = () => {
  return (
    <div>
      <h2>rerendering</h2>
        <Rerendering/>
        <h2>react.memo</h2>
        <Reactmemo/>
    </div>
  )
}

export default Rerenderingpage