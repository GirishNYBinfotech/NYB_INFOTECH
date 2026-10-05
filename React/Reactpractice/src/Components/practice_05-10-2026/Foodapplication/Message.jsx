import React from "react";

function Message() {
  function showWelcomeMessage() {
    alert("Thank you for visiting")
  }

  return (
    <section>
      <button onClick={showWelcomeMessage}>
        exit
      </button>
    </section>
  )
}

export default Message;