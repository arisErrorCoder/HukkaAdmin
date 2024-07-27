import React, { useState } from 'react';
import ReceiveStock from '../ReceiveStock/ReceiveStock';
import './StockControl.css'; // Create a CSS file for StockControl specific styles

const StockControl = () => {
  const [showReceiveStock, setShowReceiveStock] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters);
  };  

  const handleReceiveStockClick = () => {
    setShowReceiveStock(true);
  };

  const handleCancelClick = () => {
    setShowReceiveStock(false);
  };

  return (
    <div className="stock-control">
      {showReceiveStock ? (
        <ReceiveStock onCancel={handleCancelClick} />
      ) : (
        <>
          <div className="stock-control-header">
            <h1>Stock Control</h1>
            <p className="description">
              Create, manage and update purchase orders or receive stock.
              <span className="help">Need help?</span>
              <button className="receive-stock" onClick={handleReceiveStockClick}>Receive Stock</button>
            </p>
          </div>
          <div className="filters">
            <div className="filter-item">
              <label>Show</label>
              <select>
                <option>All orders</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Search orders</label>
              <input type="text" placeholder="Enter order number, supplier invoice number, note or product" />
            </div>
            <div className="filter-item">
              <label>Outlet</label>
              <select>
                <option>All outlets</option>
              </select>
            </div>
            <div className="filter-actions">
          <button className="more-filters" onClick={toggleMoreFilters}>
            {showMoreFilters ? 'Less filters' : 'More filters'}
          </button>
          <button className="clear-filters">Clear filters</button>
          <button className="search">Search</button>
        </div>
      </div>
      {showMoreFilters && (
        <div className="additional-filters">
          <div className="filter-item">
            <label>Supplier</label>
            <select>
              <option>All suppliers</option>
            </select>
          </div>
          <div className="filter-item">
            <label>Created</label>
            <input type="date" />
          </div>
          <div className="filter-item">
            <label>Due</label>
            <input type="date" />
          </div>
        </div>
      )}
          <table className="stock-control-table">
            <thead>
              <tr>
                <th>Number</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
                <th>Created</th>
                <th>Total qty.</th>
                <th>Total cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#">MAI-347</a></td>
                <td>ALL IZ WELL</td>
                <td>Colombo</td>
                <td>Received</td>
                <td>Jul 27, 2024</td>
                <td>10</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td><a href="#">MAI-346</a></td>
                <td>Vape Traders New Zealand</td>
                <td>Colombo</td>
                <td>Received</td>
                <td>Jul 27, 2024</td>
                <td>115</td>
                <td>$1,457.50</td>
              </tr>
              <tr>
                <td><a href="#">MAI-342</a></td>
                <td>Vapeyes</td>
                <td>Colombo</td>
                <td>Received</td>
                <td>Jul 26, 2024</td>
                <td>280</td>
                <td>$2,797.40</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default StockControl;
