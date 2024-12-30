import React from "react";
import "../styles_css/Menu.css";

const Menu = () => {
  const currentPath = window.location.pathname;

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
          <a
            href={item.path}
            className={currentPath === item.path ? "active" : ""}
          >
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
