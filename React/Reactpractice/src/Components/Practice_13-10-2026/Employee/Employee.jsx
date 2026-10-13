import { EmployeeProvider } from "./EmployeeProvider";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import EmployeeCount from "./EmployeeCount";

export default function Employee() {
  return (
    <EmployeeProvider>
      <h1>Employee Management</h1>
      <EmployeeForm />
      <EmployeeList />
      <EmployeeCount />
    </EmployeeProvider>
  );
}