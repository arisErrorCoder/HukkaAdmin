import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onCategoryClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onCategoryClick('home')}><i className="fa-solid fa-house"></i> Home</li>
        <li onClick={() => onCategoryClick('catalog')}><i className="fa-solid fa-tags"></i> Catalog</li>
        <li><i className="fa-solid fa-cart-shopping"></i> Sell</li>
        <li><i className="fa-solid fa-globe"></i> Online</li>
        <li><i className="fa-solid fa-chart-line"></i> Reporting</li>
        <li onClick={() => onCategoryClick('stockcontrol')}><i className="fa-solid fa-boxes-stacked"></i> Inventory</li>
        <li><i className="fa-solid fa-users"></i> Customers</li>
        <li><i className="fa-solid fa-money-bill"></i> Finance</li>
        <li><i className="fa-solid fa-gear"></i> Setup</li>
      </ul>
    </div>
  );
};

export default Sidebar;
