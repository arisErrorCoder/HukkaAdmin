import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-title">Admin Panel</div>
        <div className="navbar-icons">
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
