import React from "react";

const Emp= () => {
  const departments = [
    {
      id: 1,
      name: "IT",
      employees: [
        { id: 101, name: "Girish" },
        { id: 102, name: "King" }
      ]
    },
    {
      id: 2,
      name: "HR",
      employees: [
        { id: 201, name: "Queen" },
        { id: 202, name: "Rahul" }
      ]
    }
  ];

  return (
    <div>
      <h1>Departments</h1>
      {departments.map((department) => (
        <div key={department.id}>
            <h2>{department.name}</h2>
          <ul>
            {department.employees.map((employee) => (
              <li key={employee.id}>
                {employee.id} - {employee.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Emp