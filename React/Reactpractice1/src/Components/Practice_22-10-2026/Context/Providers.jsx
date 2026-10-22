import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "King" },
    { id: 3, name: "Girish" },
  ]);

  return (
    <Context.Provider value={{ employees, setEmployees }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;