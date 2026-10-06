import React, { useState } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent2 = () => {
  const [message, setMessage] = useState("");
  return (
    <>
      <ChildA setMessage={setMessage}/>
      <ChildB message={message}/>
    </>
  );
}

export default Parent2