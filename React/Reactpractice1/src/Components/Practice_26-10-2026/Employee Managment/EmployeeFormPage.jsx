import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import useEmployees from "./useEmployees";

export default function EmployeeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    employees,
    loading,
    addEmployee,
    updateEmployee,
  } = useEmployees();

  if (loading) return <p>Loading...</p>;

  const employee = id
    ? employees.find((emp) => emp.id === Number(id))
    : undefined;

  if (id && !employee) return <p>Employee not found.</p>;

  function handleSave(data) {
    if (id) {
      updateEmployee({ ...data, id: Number(id) });
    } else {
      addEmployee(data);
    }

    navigate("/dashboard/employees");
  }

  return (
    <EmployeeForm
      initialEmployee={employee}
      onSave={handleSave}
    />
  );
}