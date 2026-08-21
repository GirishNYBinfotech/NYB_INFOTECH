import { useParams } from "react-router-dom";

function JobDetails() {

  const { id } = useParams();

  return (
    <div>
      <h1>Job Details</h1>

      <p>Job ID: {id}</p>

      <button>Apply for this Job</button>
    </div>
  );
}

export default JobDetails;