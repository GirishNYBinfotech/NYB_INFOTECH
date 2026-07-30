import { useState } from "react";
import Modal from "./Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal close={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default Home