import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  function login(username, password) {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }

    return false;
  }

  function logout() {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
