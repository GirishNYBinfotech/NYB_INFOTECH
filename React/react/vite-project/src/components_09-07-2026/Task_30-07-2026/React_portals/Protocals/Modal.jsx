import React from "react";
import ReactDOM from "react-dom";

function Modal({ closeModal }) {
  return ReactDOM.createPortal(
    <div style={overlay}>
      <div style={modal}>
        <h2>Modal Window</h2>
        <p>
          This Modal is rendered using React Portal.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}

const modal ={
  background: "white",
  padding: "20px",
  borderRadius: "8px",
}

export default Modal;