export default function EmployeeCard({ employee, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "8px"
      }}
    >
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>

      <button onClick={() => onDelete(employee.id)}>
        Delete
      </button>
    </div>
  );
}