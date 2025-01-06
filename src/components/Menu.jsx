import React from "react";
import "../styles_css/Menu.css";
import { useLocation, Link } from "react-router-dom";

const Menu = ({ setIsMenuOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Empowering", path: "/empowering" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul className="custom-menu">
      {menuItems.map((item) => (
        <li
          key={item.name}
          className={`menu-item ${currentPath === item.path ? "active" : ""}`}
        >
          <Link
            to={item.path}
            className={currentPath === item.path ? "active" : ""}
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          >
            <span>{item.name}</span>
          </Link>

          {/* <a
            href={item.path}
            className={currentPath === item.path ? "active" : ""}
            onClick={(e) => {
              console.log(`Navigating to: ${item.path}`);
            }}
          >
            <span>{item.name}</span>
          </a> */}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
