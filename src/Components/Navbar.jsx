import React, { useState } from "react";
import "../Styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="a-logo">
          <h2 className="logo">Nareshkumar Anandan</h2>
        </a>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#sponsorships">Sponsorships</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#contactus">Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
