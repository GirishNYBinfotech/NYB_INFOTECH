import { useEffect, useState } from "react";
import { getEmployees } from "./EmployeeApi";

function EmployeeCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getEmployees()
      .then(data => setCount(data.length))
      .catch(error => console.log(error));
  }, []);

  return <h2>Total Employees: {count}</h2>;
}

export default EmployeeCount;