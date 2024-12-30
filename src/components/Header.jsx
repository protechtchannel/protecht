import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles_css/Header.css";
import logo from "../images/logo.png";
import menuIcon from "../images/menu.svg"; // Add your menu icon image
import Menu from "./Menu"; // Import the Menu component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container
  const menuIconRef = useRef(null); // Reference for the menu icon

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close menu when clicking outside
      }
    };

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      if (window.scrollY > scrollThreshold) {
        setIsMenuOpen(false); // Close menu on scrolling beyond 20vh
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <header className="header">
        {/* Logo Section */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Protecht Logo" className="logo-image" />
          </a>
        </div>

        {/* Menu Icon for Mobile */}
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="menu-icon"
          ref={menuIconRef} // Attach ref to the icon
          onClick={toggleMenu} // Toggle menu on click
        />

        {/* Navigation Links */}
        <nav className="navv">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/empowering"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Empowering
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Conditionally Render the Menu Component */}
      {isMenuOpen && (
        <div ref={menuRef}>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Header;
