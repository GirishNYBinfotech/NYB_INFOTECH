import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <div>
      <h1>Employees</h1>
      <ul>
        <li>
          <Link to="/employees/101">Queen</Link>
        </li>
        <li>
          <Link to="/employees/102">King</Link>
        </li>
        <li>
          <Link to="/employees/103">Girish</Link>
        </li>
      </ul>
    </div>
  );
}

export default EmployeeList;  