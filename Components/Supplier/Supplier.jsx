import React, { useContext, useState } from 'react';
import { StoreContext } from '../Store/Store';
import './Supplier.css';

const Supplier = () => {
  const { suppliers, addSupplier, editSupplier, deleteSupplier } = useContext(StoreContext);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newSupplier, setNewSupplier] = useState({ name: '', description: '', productsCount: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddSupplierClick = () => {
    setIsPopupVisible(true);
  };

  const handleCancelClick = () => {
    setIsPopupVisible(false);
    setNewSupplier({ name: '', description: '', productsCount: 0 });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editSupplier(editIndex, newSupplier);
    } else {
      addSupplier(newSupplier);
    }
    handleCancelClick();
  };

  const handleEditClick = (index) => {
    setNewSupplier(suppliers[index]);
    setIsPopupVisible(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    deleteSupplier(index);
  };

  return (
    <div className="supplier-details">
      <h2>Supplier</h2>
      <p>A list of all your Suppliers. <a href="#">Need help?</a></p>
      <button className="btn-add-supplier" onClick={handleAddSupplierClick}>Add Supplier</button>
      <div className="supplier-template">
        <div className="header">
          <div>Name</div>
          <div>Description</div>
          <div>Number of Products</div>
          <div>Actions</div>
        </div>
        {suppliers.map((supplier, index) => (
          <div className="row" key={index}>
            <div>{supplier.name}</div>
            <div>{supplier.description}</div>
            <div>{supplier.productsCount} <a href="#">View Products</a></div>
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
            <h3>{isEditing ? 'Edit Supplier' : 'Add New Supplier'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newSupplier.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newSupplier.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Number of Products:</label>
                <input
                  type="number"
                  name="productsCount"
                  value={newSupplier.productsCount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">{isEditing ? 'Save Changes' : 'Add Supplier'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supplier;
