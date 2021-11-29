import React, { useState } from "react";
import { NavLink  } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo"><img
                className="logo-img"
                // src="https://archive.org/download/png-movie-ticket-movie-ticket-1-950/png-movie-ticket-movie-ticket-1-950.png"
                alt="logo-1"
              
              /> <span className="span-9">CinemaTrailers</span>.com 
             
              </h3>
      <ul
        className={isMobile ? "nav-Links-mobile" : "nav-Links"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink to="/" className="home" activeClassName="main-nav-active-1" >
          <li>Home</li>
        </NavLink>

       
        <NavLink to="/movies" className="contact" activeClassName="main-nav-active" >
          <li> Movies</li>
        </NavLink>
        <NavLink to="/directors" className="contact" activeClassName="main-nav-active" >
         <li>Top Rated</li>
        </NavLink>
         <NavLink to="/movie/add" className="contact" activeClassName="main-nav-active" >
         <li> + New Movie</li>
        </NavLink>
         <NavLink to="/contact" className="contact" activeClassName="main-nav-active" >
          <li>Contact Us</li>
        </NavLink>
        
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
