import React from 'react';
import './MainContent.css';
import Products from '../Products/Products';
import Brands from '../Brands/Brands';
import ProductCategory from '../ProductCategory/ProductCategory';
import Supplier from '../Supplier/Supplier';
import ProductTags from '../ProductTags/ProductTags';
import Orders from '../Orders/Orders';
import Transfers from '../Transfers/Transfers';
import Returns from '../Returns/Returns';
import SalesOverview from '../SalesOverview/SalesOverview';
import StockControl from '../StockControl/StockControl';

const MainContent = ({ selectedCategory, selectedContent }) => {
  if (selectedCategory === 'home') {
    return <SalesOverview />;
  }

  return (
    <div className="main-content">
      {selectedCategory === 'catalog' && !selectedContent && (
        <p className="select-content">Select an option to see details.</p>
      )}
      {selectedCategory === 'stockcontrol' && !selectedContent && (
        <p className="select-content">Select an option to see details.</p>
      )}
      {selectedContent === 'product1' && <Products />}
      {selectedContent === 'brands' && <Brands />}
      {selectedContent === 'productCategory' && <ProductCategory />}
      {selectedContent === 'suppliers' && <Supplier />}
      {selectedContent === 'ProductTags' && <ProductTags />}
      {selectedContent === 'stockControl' && <StockControl/>}
      {selectedContent === 'transfers' && <Transfers />}
      {selectedContent === 'returns' && <Returns />}
    </div>
  );
};

export default MainContent;
