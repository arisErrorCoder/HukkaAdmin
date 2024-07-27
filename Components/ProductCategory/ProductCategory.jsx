import React, { useContext, useState } from 'react';
import "./ProductCategory.css"
import { StoreContext } from '../Store/Store';

const ProductCategory = () => {
  const { categories, addCategory, editCategory, deleteCategory } = useContext(StoreContext);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '', productsCount: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddCategoryClick = () => {
    setIsPopupVisible(true);
  };

  const handleCancelClick = () => {
    setIsPopupVisible(false);
    setNewCategory({ name: '', description: '', productsCount: 0 });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editCategory(editIndex, newCategory);
    } else {
      addCategory(newCategory);
    }
    handleCancelClick();
  };

  const handleEditClick = (index) => {
    setNewCategory(categories[index]);
    setIsPopupVisible(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    deleteCategory(index);
  };

  return (
    <div className="category-details">
      <h2>Product Categories</h2>
      <p>A list of all your product categories. <a href="#">Need help?</a></p>
      <button className="btn-add-category" onClick={handleAddCategoryClick}>Add Category</button>
      <div className="category-template">
        <div className="header">
          <div>Name</div>
          <div>Description</div>
          <div>Number of Products</div>
          <div>Actions</div>
        </div>
        {categories.map((category, index) => (
          <div className="row" key={index}>
            <div>{category.name}</div>
            <div>{category.description}</div>
            <div>{category.productsCount} <a href="#">View Products</a></div>
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
            <h3>{isEditing ? 'Edit Category' : 'Add New Category'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newCategory.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newCategory.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Number of Products:</label>
                <input
                  type="number"
                  name="productsCount"
                  value={newCategory.productsCount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">{isEditing ? 'Save Changes' : 'Add Category'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
