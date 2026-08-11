import { useNavigate } from "react-router-dom";

function Home5() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>

      <button onClick={() => navigate("/students")}>
        View Students
      </button>
    </div>
  );
}

export default Home5