import React from "react";
import ReactDOM from "react-dom";

function Modal({ closeModal }) {

  return ReactDOM.createPortal(

    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          textAlign: "center"
        }}
      >

        <h2>React Portal</h2>

        <p>This Modal is rendered outside root.</p>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>,

    document.getElementById("portal-root")

  );

}

export default Modal;