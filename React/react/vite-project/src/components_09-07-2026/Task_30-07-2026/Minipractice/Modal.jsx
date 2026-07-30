import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

function Modal({ isOpen, onClose, onSubmit }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={styles.overlay}
      onClick={onClose}
    >
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>React Portal Modal</h2>
        <p>This modal is rendered using React Portals.</p>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    portalRoot
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
    textAlign: "center"
  }
};

export default Modal;