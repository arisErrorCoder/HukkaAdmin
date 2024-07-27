import React, { useContext, useState } from 'react';
import { StoreContext } from '../Store/Store';
import './ProductTags.css';

const ProductTags = () => {
  const { tags, addTag, editTag, deleteTag } = useContext(StoreContext);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newTag, setNewTag] = useState({ name: '', description: '', productsCount: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTagClick = () => {
    setIsPopupVisible(true);
  };

  const handleCancelClick = () => {
    setIsPopupVisible(false);
    setNewTag({ name: '', description: '', productsCount: 0 });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTag({ ...newTag, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editTag(editIndex, newTag);
    } else {
      addTag(newTag);
    }
    handleCancelClick();
  };

  const handleEditClick = (index) => {
    setNewTag(tags[index]);
    setIsPopupVisible(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    deleteTag(index);
  };

  return (
    <div className="tag-details">
      <h2>Product Tags</h2>
      <p>A list of all your Product Tags. <a href="#">Need help?</a></p>
      <button className="btn-add-tag" onClick={handleAddTagClick}>Add Tag</button>
      <div className="tag-template">
        <div className="header">
          <div>Name</div>
          <div>Description</div>
          <div>Number of Products</div>
          <div>Actions</div>
        </div>
        {tags.map((tag, index) => (
          <div className="row" key={index}>
            <div>{tag.name}</div>
            <div>{tag.description}</div>
            <div>{tag.productsCount} <a href="#">View Products</a></div>
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
            <h3>{isEditing ? 'Edit Tag' : 'Add New Tag'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newTag.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newTag.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Number of Products:</label>
                <input
                  type="number"
                  name="productsCount"
                  value={newTag.productsCount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">{isEditing ? 'Save Changes' : 'Add Tag'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTags;
