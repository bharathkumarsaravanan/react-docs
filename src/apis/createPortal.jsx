import React from "react";
import { createPortal } from "react-dom";

const CreatePortal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const ModalContent = () => {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div
          style={{
            borderRadius: "5px",
            padding: "5px 15px",
            background: "white",
          }}
        >
          <h1>Modal</h1>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>click me</button>
      {showModal &&
        createPortal(<ModalContent />, document.getElementById("portal"))}
    </>
  );
};

export default CreatePortal;
