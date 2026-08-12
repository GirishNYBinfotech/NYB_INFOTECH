import React from 'react'
import Consume from "./Consume";
import { UserContext } from "./Create";

function Providerdata() {
  const user = "Girish";

  return (
    <UserContext.Provider value={user}>
      <Consume/>
    </UserContext.Provider>
  );
}

export default Providerdata