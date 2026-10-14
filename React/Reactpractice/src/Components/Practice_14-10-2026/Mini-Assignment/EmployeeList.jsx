import react,{ memo } from "react";

const EmployeeList = memo(function EmployeeList({ employees, onSelect,}) {
  console.log("EmployeeList rendered");

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Performance</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>
              <button onClick={() => onSelect(emp)}>
                {emp.name}
              </button>
            </td>
            <td>{emp.department}</td>
            <td>Rs.{emp.salary}</td>
            <td>{emp.performance}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default EmployeeList;
