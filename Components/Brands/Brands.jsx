import React, { useContext, useState } from 'react';
import './Brands.css';
import { StoreContext } from '../Store/Store';

const Brands = () => {
  const { brands, addBrand, editBrand, deleteBrand } = useContext(StoreContext);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newBrand, setNewBrand] = useState({ name: '', description: '', productsCount: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddBrandClick = () => {
    setIsPopupVisible(true);
  };

  const handleCancelClick = () => {
    setIsPopupVisible(false);
    setNewBrand({ name: '', description: '', productsCount: 0 });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBrand({ ...newBrand, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editBrand(editIndex, newBrand);
    } else {
      addBrand(newBrand);
    }
    handleCancelClick();
  };

  const handleEditClick = (index) => {
    setNewBrand(brands[index]);
    setIsPopupVisible(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    deleteBrand(index);
  };

  return (
    <div className="brand-details">
      <h2>Brands</h2>
      <p>A list of all your brands. <a href="#">Need help?</a></p>
      <button className="btn-add-brand" onClick={handleAddBrandClick}>Add Brand</button>
      <div className="brand-template">
        <div className="header">
          <div>Name</div>
          <div>Description</div>
          <div>Number of Products</div>
          <div>Actions</div>
        </div>
        {brands.map((brand, index) => (
          <div className="row" key={index}>
            <div>{brand.name}</div>
            <div>{brand.description}</div>
            <div>{brand.productsCount} <a href="#">View Products</a></div>
            <div>
              <button className="btn-edit" onClick={() => handleEditClick(index)}>Edit</button>
              <button className="btn-delete" onClick={() => handleDeleteClick(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCancelClick}>&times;</span>
            <h3>{isEditing ? 'Edit Brand' : 'Add New Brand'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newBrand.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newBrand.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Number of Products:</label>
                <input
                  type="number"
                  name="productsCount"
                  value={newBrand.productsCount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">{isEditing ? 'Save Changes' : 'Add Brand'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;
