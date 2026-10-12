import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2> MyApp</h2>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink> |

        <NavLink to="/employees"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Employees
        </NavLink> |

        <NavLink to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;