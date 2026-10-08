import { useEffect, useState } from "react";
import { getEmployees } from "./EmployeeApi";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees()
      .then(data => setEmployees(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Employees</h2>

      {employees.map(employee => (
        <p key={employee.id}>
          {employee.name}
        </p>
      ))}
    </div>
  );
}

export default EmployeeList;