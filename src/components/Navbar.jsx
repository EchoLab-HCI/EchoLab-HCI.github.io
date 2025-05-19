import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">EchoLab HCI</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/projects">Projects</Link>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
