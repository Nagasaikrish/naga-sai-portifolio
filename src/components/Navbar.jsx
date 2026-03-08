
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") !== "false";
  });

  useEffect(() => {
    const handler = () => {
      setDarkMode(localStorage.getItem("darkMode") !== "false");
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // Listen for changes from the toggle button
  useEffect(() => {
    const observer = setInterval(() => {
      setDarkMode(localStorage.getItem("darkMode") !== "false");
    }, 500);
    return () => clearInterval(observer);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm py-3 ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-danger fs-4" to="/">
          NSK
        </Link>
        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/contact">Contact</Link>
            </li>
          </ul>
          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <a
              href="/Resume-Naga Sai Krishna.pdf"
              download="Resume.pdf"
              className="btn btn-danger px-3 fw-semibold"
            >
              Download Resume
            </a>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}