import React from "react";

const LogicalAND= () => {
  const employees = [
    { id: 1, name: "Girish", active: true},
    { id: 2, name: "King", active: true},
    { id: 3, name: "Queen", active: false}
  ];

  return (
    <div>
      {employees.map((employee) =>
        employee.active && (
          <h4 key={employee.id}>{employee.name}</h4>
        )
      )}
    </div>
  );
};

export default LogicalAND