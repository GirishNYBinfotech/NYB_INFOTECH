import React from "react";

function Map2() {
  const employees =[
    { id: 104, name: "Arun", role:"Developer" },
    { id: 101, name:"Girish", role:"Developer" },
    { id: 102, name:"Ravi", role:"Tester" },
    { id: 103, name:"John", role:"Designer" }];

  return (
    <div>
        <h2>Employee List</h2>
        {employees.map((employee,index) => (
            // <div key={index}>
            <div key={employee.id}>
                <h3>{employee.name}</h3>
                <p>{employee.role}</p>
            </div>
        ))}
    </div>
  );
}

export default Map2