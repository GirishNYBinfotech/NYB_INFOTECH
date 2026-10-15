function BuggyComponent() {
  throw new Error("Something went wrong!");
  return <h1>Hello React!</h1>;
}

export default BuggyComponent;