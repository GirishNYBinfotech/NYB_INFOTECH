import { useState } from "react";

function Buttonusestates() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <h2>Hello React</h2>}
    </div>
  );
}

export default Buttonusestates