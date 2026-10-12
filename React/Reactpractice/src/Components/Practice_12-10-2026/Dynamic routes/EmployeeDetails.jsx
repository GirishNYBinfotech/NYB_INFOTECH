import { useParams, useNavigate } from "react-router-dom";

const employees = [
  { id: 1, name: "Girish", role: "Frontend Developer" },
  { id: 2, name: "Rahul", role: "Backend Developer" },
  { id: 3, name: "Priya", role: "UI Designer" },
];

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  )

  if (!employee) {
    return (
      <div>
        <h2>Employee Not Found</h2>
        <button onClick={() => navigate("/employees")}>
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Employee Details</h1>

      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>

      <button onClick={() => navigate("/employees")}>
        Back to Employees
      </button>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default EmployeeDetails;
