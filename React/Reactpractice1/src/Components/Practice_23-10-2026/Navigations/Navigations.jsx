import {Routes,Route,Link,useParams,useNavigate} from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

// URL Parameters
function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>

      <button onClick={() => navigate(`/user/102`)}>
        View User 102
      </button>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

// Programmatic Navigation
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/user/101");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

// 404 Page
function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <button onClick={() => navigate("/")}>
        Return Home
      </button>
    </div>
  );
}

export default function Navigations() {
  return (
    <>
      <h1>Navigations</h1>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
