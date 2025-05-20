import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
