import Employeecard from "./Employeecard";

function Employees() {
  return (
    <div>
      <h1>Employee Management</h1>

      <Employeecard
        name="Rahul"
        role="Developer"
        salary={40000}
      />

      <Employeecard
        name="Girish"
        role="Designer"
        salary={35000}
      />

      <Employeecard
        name="King"
        role="Tester"
        salary={30000}
      />
    </div>
  );
}

export default Employees