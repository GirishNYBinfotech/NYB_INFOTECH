import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function Boundary() {
  return (
    <div>
      <h1>My React App</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default Boundary