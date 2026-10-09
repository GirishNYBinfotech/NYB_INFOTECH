import React from "react";
import { UserContext } from "./ContextApi";
import Consumer from "./Consumer";

function Providers() {
  return (
    <UserContext.Provider value="Girish">
      <Consumer/>
    </UserContext.Provider>
  );
}

export default Providers