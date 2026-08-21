import { Link } from "react-router-dom";

function Jobs() {
  const jobs = [
    { id: 101, title: "React Developer" },
    { id: 102, title: "Java Developer" },
    { id: 103, title: "DevOps Engineer" }
  ];

  return (
    <div>
      <h1>Available Jobs</h1>

      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>

          <Link to={`/jobs/${job.id}`}>
            View Job
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Jobs;