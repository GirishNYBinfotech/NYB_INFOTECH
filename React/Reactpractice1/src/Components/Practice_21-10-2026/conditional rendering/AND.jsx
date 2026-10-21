import React from "react";

function AND() {
  const hasNotification = true;

  return (
    <div>
      <h1>Dashboard</h1>
      {hasNotification && <p>You have a new notification!</p>}
    </div>
  );
}

export default AND