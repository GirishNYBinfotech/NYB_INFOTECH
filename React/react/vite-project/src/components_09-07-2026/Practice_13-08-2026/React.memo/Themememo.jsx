import React, { useState } from "react";

const UserProfile = React.memo(({ name, age }) => {
  console.log("UserProfile rendered");

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
});

function Themememo() {
  const [dark, setDark] = useState(false)
  return (
    <div>
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <p>Theme: {dark ? "Dark" : "Light"}</p>
      <UserProfile name="Girish" age={25} />
    </div>
  );
}

export default Themememo