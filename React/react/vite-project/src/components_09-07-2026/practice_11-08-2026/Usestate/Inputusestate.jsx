import { useState } from "react";

function Inputusestate() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello,{name}</h2>
    </div>
  );
}

export default Inputusestate

