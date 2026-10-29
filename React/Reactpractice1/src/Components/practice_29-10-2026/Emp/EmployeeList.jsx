import { useEffect, useState } from "react";
import { getEmployees } from "./employeeApi";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } 
      catch (err) {
        setError(err.message);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [])
  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>{error}</p>
  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <p key={employee.id}>{employee.name}</p>
      ))}
    </div>
  );
}

export default EmployeeList;