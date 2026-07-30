import React from "react";
import ReactDOM from "react-dom";

function Popup({ closePopup }) {
  return ReactDOM.createPortal(
    <div style={popup}>
      <p>Data Saved Successfully!</p>
      <button onClick={closePopup}>
        Close
      </button>
    </div>,

    document.getElementById("portal-root")
  )
}

const popup = {
  position: "fixed",
  top: "20px",
  right: "20px",
  background: "green",
  color: "white",
  padding: "15px",
  borderRadius: "5px",

  zIndex: 1000,
};

export default Popup;