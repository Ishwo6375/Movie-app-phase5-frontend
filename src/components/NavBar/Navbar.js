import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul
        className={isMobile ? "nav-Links-mobile" : "nav-Links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>

       
        <Link to="/movies" className="contact">
          <li>All Movies</li>
        </Link>
        <Link to="/directors" className="contact">
         <li>Directors</li>
        </Link>
         <Link to="/contact" className="contact">
          <li>Contact Us</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        <div className="ham-menu">
          <FaBars />
        </div>

        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
