import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" end className="logo">
        ✨ RouteApp
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;