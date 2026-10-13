import EmployeeProvider from "./EmployeeProvider";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import EmployeeCount from "./EmployeeCount";

export default function Employee() {
  return (
    <EmployeeProvider>
      <h1>Employee Management Portal</h1>
      <EmployeeForm />
      <EmployeeCount />
      <EmployeeList />
    </EmployeeProvider>
  );
}