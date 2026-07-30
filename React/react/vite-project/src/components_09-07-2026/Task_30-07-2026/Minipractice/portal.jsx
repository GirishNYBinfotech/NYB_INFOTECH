import React, { useState } from "react";
import Modal from "./Modal";

function Portal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log("Modal Opened");
    setIsModalOpen(true);
  }
  const closeModal = () => {
    console.log("Modal Closed");
    setIsModalOpen(false);
  }
  const handleSubmit = () => {
    alert("Submitted Successfully!");
    console.log("Submit Button Clicked");
    setIsModalOpen(false);
  }
  return (
    <div style={{ padding: "40px" }}>
      <h1>React Portal Example</h1>
      <button onClick={openModal}> Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Portal