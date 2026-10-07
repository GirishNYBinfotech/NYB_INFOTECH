import React from 'react'

const And = () => {
  const isAdmin = true;

  return (
    <div>
        <h2>AND</h2>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}

export default And