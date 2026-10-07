import React from 'react'

const Ternary = () => {
 const isLoggedIn = false;

  return (
    <div>
        <h2>Ternary</h2>
      <h3>My Website</h3>
      {isLoggedIn ? (
        <div>
          <h4>Welcome Back</h4>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Welcome Guest</h4>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}


export default Ternary