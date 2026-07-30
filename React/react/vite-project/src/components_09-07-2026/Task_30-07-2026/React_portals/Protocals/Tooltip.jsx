import React, { useState } from "react";
import ReactDOM from "react-dom";

function Tooltip() {
  const [show, setShow] = useState(false)

  return (
    <>

      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hover Me
      </button>

      {show &&
        ReactDOM.createPortal(
          <div style={tooltip}>
            This is Tooltip
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  )
}

const tooltip = {
  position: "fixed",
  top: "180px",
  left: "250px",

  background: "black",
  color: "white",

  padding: "8px",
  borderRadius: "5px",

  zIndex: 1000,
};

export default Tooltip;