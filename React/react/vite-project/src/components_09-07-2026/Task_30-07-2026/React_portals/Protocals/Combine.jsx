import React, { useState } from "react";
import Tooltip from "./Tooltip";
import Modal from "./Modal";
import Popup from "./Popup";

function Combine() {
  const [showModal, setShowModal] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div>
      <h1>React Portals Demo</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <br />
      <br />
      <button onClick={() => setShowPopup(true)}>Show Popup</button>
      <br />
      <br />
      <Tooltip />
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}/>
      )}

      {showPopup && (
        <Popup closePopup={() => setShowPopup(false)}/>
      )}

    </div>
  )
}

export default Combine