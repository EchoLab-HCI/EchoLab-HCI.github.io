import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // 关闭菜单后切换主题
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    setMenuOpen(false);
  };

  // 点击链接后自动关闭菜单
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-brand">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/echo_logo.png" alt="EchoLab Logo" className="nav-logo" />
            Echo Lab
          </Link>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon">&#9776;</span>
        </button>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/members" onClick={handleLinkClick}>
            Members
          </Link>
          <Link to="/publications" onClick={handleLinkClick}>
            Publications
          </Link>
          <Link to="/projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </div>
        <button className="theme-toggle" onClick={handleThemeToggle}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
