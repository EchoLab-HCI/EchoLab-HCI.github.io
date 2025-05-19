import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">EchoLab HCI</Link>
      </div>
      <div className="nav-links">
        <Link to="/">首页</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/contact">联系我们</Link>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
