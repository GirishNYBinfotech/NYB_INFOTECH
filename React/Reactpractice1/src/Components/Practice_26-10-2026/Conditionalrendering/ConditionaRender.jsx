import { useState } from "react";

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRender;