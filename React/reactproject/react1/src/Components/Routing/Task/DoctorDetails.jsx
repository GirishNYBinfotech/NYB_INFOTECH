import { useParams } from "react-router-dom";

function DoctorDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Doctor Details</h1>
      <p>Doctor ID: {id}</p>
      <p> You are viewing the details of doctor with ID {id}.</p>
    </div>
  );
}

export default DoctorDetails;