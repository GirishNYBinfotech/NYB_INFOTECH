import React from 'react'
import { useContext } from "react";
import { UserContext } from './Create';

function Consume() {
  const user = useContext(UserContext);
  return <h1>Hello,{user}</h1>;
}

export default Consume