import React from "react";

function PatientCard({ patient, onRemove }) {

  console.log("Rendering:", patient.name);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px"
      }}
    >
      <h3>{patient.name}</h3>

      <p>Age: {patient.age}</p>

      <p>Disease: {patient.disease}</p>

      <button onClick={() => onRemove(patient.id)}>
        Remove
      </button>
    </div>
  );
}

export default React.memo(PatientCard);