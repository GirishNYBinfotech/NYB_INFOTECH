import ReactDOM from "react-dom";

function Modal({ close }) {
  return ReactDOM.createPortal(
    <div>
      <h2>Portal Modal</h2>
      <button onClick={close}>Close</button>
    </div>,
    document.getElementById("portal-root")
  )
}

export default Modal;