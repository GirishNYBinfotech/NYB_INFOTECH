import { useState } from "react";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";

function LogContext() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Navbar />
    </AuthContext.Provider>
  );
}

export default LogContext