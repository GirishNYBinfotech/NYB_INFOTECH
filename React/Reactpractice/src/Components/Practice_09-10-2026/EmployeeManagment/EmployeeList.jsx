import EmployeeCard from "./EmployeeCard";

export default function EmployeeList({
  employees,
  onDelete
}) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}