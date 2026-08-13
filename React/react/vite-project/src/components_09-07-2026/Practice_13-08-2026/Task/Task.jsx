import React, {
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense
} from "react";

import usePatients from "./usePatients";
import PatientCard from "./PatientCard";

// Lazy Loading
const Doctors = lazy(() => import("./Doctors"));

function Task() {

  // Custom Hook
  const {
    patients,
    removePatient
  } = usePatients();

  const [search, setSearch] = useState("");

  const [showDoctors, setShowDoctors] = useState(false);

  // useMemo
  const filteredPatients = useMemo(() => {

    console.log("Filtering patients...");

    return patients.filter((patient) =>
      patient.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [patients, search]);

  // useCallback
  const handleRemove = useCallback((id) => {

    removePatient(id);

  }, [removePatient]);

  return (
    <div>

      <h1>Hospital Management System</h1>

      <hr />

      <h2>Patient Management</h2>

      {/* Search */}

      <input
        type="text"
        placeholder="Search patient"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Patient List */}

      <h3>Patients</h3>

      {filteredPatients.map((patient) => (

        <PatientCard
          key={patient.id}
          patient={patient}
          onRemove={handleRemove}
        />

      ))}

      <hr />

      {/* Doctors */}

      <button
        onClick={() => setShowDoctors(true)}
      >
        Show Doctors
      </button>

      {showDoctors && (

        <Suspense fallback={<h3>Loading Doctors...</h3>}>

          <Doctors />

        </Suspense>

      )}

    </div>
  );
}

export default Task