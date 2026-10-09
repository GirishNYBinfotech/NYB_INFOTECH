import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import useEmployees from "./useEmployees";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

export default function Employee() {
  const { employees, setEmployees } =useContext(EmployeeContext);
  const { loading, error, loadEmployees } = useEmployees();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  // Add employee
  function addEmployee(employee) {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      employee
    ]);
  }

  // Delete employee
  function deleteEmployee(id) {
    setEmployees((previousEmployees) =>
      previousEmployees.filter(
        (employee) => employee.id !== id
      )
    );
  }

  // Search and filter employees
  const filteredEmployees = employees.filter((employee) => {
    const matchesName = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesName && matchesDepartment;
  });

  return (
    <div>
      <h1>Employee Management App</h1>
      <p>Total Employees: {employees.length}</p>
      <EmployeeForm onAddEmployee={addEmployee} />

      <hr />

      <h2>Search Employees</h2>
      <SearchBar
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
      />

      {loading ? (
        <p>Loading employees...</p>
      ) : error ? (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={loadEmployees}>
            Try Again
          </button>
        </div>
      ) : (
        <EmployeeList
          employees={filteredEmployees}
          onDelete={deleteEmployee}
        />
      )}
    </div>
  );
}