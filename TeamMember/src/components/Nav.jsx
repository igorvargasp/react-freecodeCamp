import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/groupedTeamMembers" className="nav-link">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
