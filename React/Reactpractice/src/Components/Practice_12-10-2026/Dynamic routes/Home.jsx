import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to React Router application.</p>

      <Link to="/employees">
        View All Employees
      </Link>
    </div>
  );
}

export default Home;
