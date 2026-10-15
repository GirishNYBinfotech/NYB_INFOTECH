import { EmployeeProvider, useEmployeeContext } from "./EmployeeContext";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";
import Loading from "./Loding";

function EmployeePage() {
  const { employees, setEmployees, loading, error } =
    useEmployeeContext();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Employee Management Portal</h1>

      <EmployeeForm
        onAdd={(employee) =>
          setEmployees((prev) => [...prev, employee])
        }
      />

      <EmployeeTable employees={employees} />
    </div>
  );
}

export default function Employee() {
  return (
    <EmployeeProvider>
      <EmployeePage />
    </EmployeeProvider>
  );
}