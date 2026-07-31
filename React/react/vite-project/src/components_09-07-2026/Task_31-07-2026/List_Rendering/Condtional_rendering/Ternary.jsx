import React from "react";

const Ternary= () => {
  const employees = [
    { id: 1, name: "Girish", active: true },
    { id: 2, name: "King", active: false },
    { id: 3, name: "Queen", active: true }
  ];

  return (
    <div>
      <h3>Active Employees</h3>
      {employees.map((employee) =>
        employee.active ? (
          <h4 key={employee.id}>{employee.name}</h4>
        ):null
      )}
    </div>
  );
};

export default Ternary