import React from 'react'

const And= () => {
   const isAdmin=true
  return (
    <div>
      {isAdmin && <p>Welcome admin</p>}
    </div>
  )
}

export default And