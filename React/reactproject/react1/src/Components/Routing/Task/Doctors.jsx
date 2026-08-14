import { Link } from "react-router-dom";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      specialization: "Cardiologist",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Neurologist",
    },
    {
      id: 3,
      name: "Dr. Arjun Rao",
      specialization: "General Physician",
    },
  ];

  return (
    <div>
      <h1>Our Doctors</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
          <Link to={`/doctors/${doctor.id}`}>View Doctor</Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Doctors;