import { useRef } from "react";

function Inputvalue() {
  const inputRef = useRef();

  const showValue = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={showValue}>Show Value</button>
    </>
  );
}

export default Inputvalue