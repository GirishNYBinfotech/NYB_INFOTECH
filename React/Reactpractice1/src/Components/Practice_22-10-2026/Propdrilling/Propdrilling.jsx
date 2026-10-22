function Propdriling() {
  const employee = "Rahul";

  return <Parent employee={employee} />;
}

function Parent({ employee }) {
  return <Child employee={employee} />;
}

function Child({ employee }) {
  return <GrandChild employee={employee} />;
}

function GrandChild({ employee }) {
  return <h2>Employee: {employee}</h2>;
}

export default Propdriling