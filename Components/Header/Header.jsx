// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Hi Sarath, here’s what’s happening in this store</h1>
      <div className="date-filter">
        <button className="active">Today</button>
        <button>This week</button>
        <button>This month</button>
      </div>
    </div>
  );
};

export default Header;
