import ReactDOM from "react-dom";

function Modal({ close }) {

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="box">
                <h2>Portal Modal</h2>
                <button onClick={close}>
                    Close
                </button>
            </div>
        </div>,
        document.getElementById("portal-root")
    );
}

export default Modal;