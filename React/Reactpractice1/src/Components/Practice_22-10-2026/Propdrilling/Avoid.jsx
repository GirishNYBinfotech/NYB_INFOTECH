import { createContext, useContext } from "react";

const EmployeeContext = createContext();

function Avoid() {
  const employee = "Rahul";

  return (
    <EmployeeContext.Provider value={employee}>
      <Parent />
    </EmployeeContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const employee = useContext(EmployeeContext);
  return <h2>Employee: {employee}</h2>
}

export default Avoid