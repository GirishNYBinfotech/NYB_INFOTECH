import React, { useState } from "react";
import Modal from "./Modal";

function Portals() {

  const [showModal, setShowModal] = useState(false);

  return (

    <div
      style={{
        padding: "30px"
      }}
    >

      <h1>Home Page</h1>

      <button
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      {
        showModal &&
        <Modal
          closeModal={() => setShowModal(false)}
        />
      }

    </div>

  );

}

export default Portals