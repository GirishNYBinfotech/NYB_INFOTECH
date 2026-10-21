function EmployeeCard({ name, role, salary }) {
  return (
    <div >
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Salary: Rs.{salary}</p>
    </div>
  );
}

export default EmployeeCard;
