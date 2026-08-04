import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee ID: {id}</p>
    </div>
  );
}

export default EmployeeDetails;