import React, { useState, useMemo, useCallback } from "react";

const Employee = React.memo(function Employee({ employee, onSelect }) {
  console.log("Employee rendered:", employee.name);

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <button onClick={() => onSelect(employee.name)}>
        Select Employee
      </button>
    </div>
  );
});

export default function Employees() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const employees = [
    { id: 1, name: "Girish", role: "Developer" },
    { id: 2, name: "Queen", role: "Designer" },
    { id: 3, name: "King", role: "Tester" },
    { id: 4, name: "Rahul", role: "Manager" },
  ];

  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees...");

    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelect = useCallback((name) => {
    setSelected(name);
  }, []);

  return (
    <div >
      <h1>React Performance</h1>
      <h2>Employee Search</h2>
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Employee List</h3>
      {filteredEmployees.map((employee) => (
        <Employee
          key={employee.id}
          employee={employee}
          onSelect={handleSelect}
        />
      ))}

      <p>Matching employees: {filteredEmployees.length}</p>
      <p>Selected employee: {selected || "None"}</p>
    </div>
  );
}
