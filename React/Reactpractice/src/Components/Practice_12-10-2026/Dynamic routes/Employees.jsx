import { Link, useNavigate } from "react-router-dom";

const employees = [
  { id: 1, name: "Girish", role: "Frontend Developer" },
  { id: 2, name: "Rahul", role: "Backend Developer" },
  { id: 3, name: "Priya", role: "UI Designer" },
];

function Employees() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Employee List</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>

          <Link to={`/employees/${employee.id}`}>
            View Details
          </Link>
        </div>
      ))}

      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default Employees;
