import { useState, useCallback } from "react";

function usePatients() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Ravi",
      age: 35,
      disease: "Fever"
    },
    {
      id: 2,
      name: "Priya",
      age: 28,
      disease: "Diabetes"
    },
    {
      id: 3,
      name: "Rahul",
      age: 45,
      disease: "Blood Pressure"
    }
  ]);

  const removePatient = useCallback((id) => {
    setPatients((oldPatients) =>
      oldPatients.filter((patient) => patient.id !== id)
    );
  }, []);

  return {
    patients,
    removePatient
  };
}

export default usePatients;