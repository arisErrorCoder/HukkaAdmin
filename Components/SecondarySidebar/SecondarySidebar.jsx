import React from 'react';
import './SecondarySidebar.css';

const SecondarySidebar = ({ selectedCategory, onContentSelect }) => {
  const getCategoryOptions = () => {
    switch (selectedCategory) {
      case 'catalog':
        return (
          <ul>
            <li onClick={() => onContentSelect('product1')}>Products</li>
            <li onClick={() => onContentSelect('brands')}>Brands</li>
            <li onClick={() => onContentSelect('suppliers')}>Suppliers</li>
            <li onClick={() => onContentSelect('ProductTags')}>Product tags</li>
            <li onClick={() => onContentSelect('productCategory')}>Product categories</li>
          </ul>
        );
      case 'stockcontrol':
        return (
          <ul>
            <li onClick={() => onContentSelect('stockControl')}>Stock Control</li>
            <li onClick={() => onContentSelect('transfers')}>Inventory counts</li>
            <li onClick={() => onContentSelect('returns')}>Returns</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return <div className="secondary-sidebar">{getCategoryOptions()}</div>;
};

export default SecondarySidebar;
