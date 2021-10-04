import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo"><img
                className="logo-img"
                src="https://www.stayathomemum.com.au/wp-content/uploads/2018/02/Foxtel_2012logo.png"
                alt="logo-1"
              
              /> <span className="span-9">Movies</span>.net 
             
              </h3>
      <ul
        className={isMobile ? "nav-Links-mobile" : "nav-Links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>

       
        <Link to="/movies" className="contact">
          <li> Movies</li>
        </Link>
        <Link to="/directors" className="contact">
         <li>Top Rated</li>
        </Link>
         <Link to="/movie/add" className="contact">
         <li> + New Movie</li>
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
