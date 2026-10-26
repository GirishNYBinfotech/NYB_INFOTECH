import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

export function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function Navigation() {
  return (
    <BrowserRouter>
      <NavigationRoutes />
    </BrowserRouter>
  );
}