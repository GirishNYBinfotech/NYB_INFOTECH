import React, { useEffect, useState } from "react";

function API() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  
  if (loading) {
    return <h3>Loading employees...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  if (employees.length === 0) {
    return <h3>No employees found.</h3>;
  }

  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <div key={employee.id}>
          <p>{employee.name}</p>
          <p>{employee.email}</p>
        </div>
      ))}
    </div>
  );
}

export default API