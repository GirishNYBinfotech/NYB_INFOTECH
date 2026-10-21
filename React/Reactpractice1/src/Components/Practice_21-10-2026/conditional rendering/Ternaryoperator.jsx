import React, { useState } from "react";

function Ternaryoperator() {
    const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn?(<h2>Welcome Back!</h2> ) : (<h2>Please Login</h2> )}
    </div>
  );
}

export default Ternaryoperator