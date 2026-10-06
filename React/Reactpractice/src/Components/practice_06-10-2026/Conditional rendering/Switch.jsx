import React from 'react'

function Switch() {
  const role="admin"
  let content;
  switch (role) {
    case "admin":
      content=<p>Admin Page</p>
      break;
    case "user":
      content=<p>User Page</p>
      break;
    case "guest":
      content=<p>Guest Page</p>
      break;
    default:
      content=<p>Unknown Role</p>
  }
  return <div>{content}</div>;
}

export default Switch