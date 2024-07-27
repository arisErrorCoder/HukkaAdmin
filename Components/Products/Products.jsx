import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import { StoreContext } from '../Store/Store';
import Modal from './Model'; // Import the Modal component
import axios from 'axios';

const Products = () => {
  const url = "http://localhost:5000";
  const { brands, suppliers, categories } = useContext(StoreContext);
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const [isEditing, setIsEditing] = useState({
    name: '',
    brand: '',
    supplier: '',
    description: '',
    tags: '',
    category: '',
    inventory: '',
    price: '',
    channel: '',
    date: '',
    sellInStore: true,
    sellOnline: false,
    image: null,
  });
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    supplier: '',
    description: '',
    tags: '',
    category: '',
    inventory: '',
    price: '',
    channel: '',
    date: '',
    sellInStore: true,
    sellOnline: false,
    image: null,
  });
  
  const [editProduct, setEditProduct] = useState({
    name: '',
    brand: '',
    supplier: '',
    description: '',
    tags: '',
    category: '',
    inventory: '',
    price: '',
    channel: '',
    date: '',
    sellInStore: true,
    sellOnline: false,
    image: null,
  });
  

  const [filters, setFilters] = useState({
    search: '',
    supplier: '',
    brand: '',
    orderNumber: '',
    category: '',
    tags: '',
    status: '',
    channel: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        if (response.data) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    

    fetchProducts();
  }, []);

  const handleAddProductClick = () => {
    setIsAdding(true);
  };

  const handleEditProductClick = (product) => {
    setEditProduct(product);
    setIsEditing(true);
  };

  const handleDeleteProductClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
      setFilteredProducts(filteredProducts.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSaveProduct = async () => {
    const productData = newProduct.image ? URL.createObjectURL(newProduct.image) : 'https://via.placeholder.com/150';
    const productWithImage = { ...newProduct, image: productData };

    try {
      const response = await axios.post('http://localhost:5000/api/products', productWithImage);
      setProducts([...products, response.data]);
      setFilteredProducts([...products, response.data]);
      setNewProduct({
        name: '',
        brand: '',
        supplier: '',
        description: '',
        tags: '',
        category: '',
        inventory: '',
        price: '',
        channel: '',
        date: '',
        sellInStore: true,
        sellOnline: false,
        image: null,
      });
      setIsAdding(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    let productData;
    if (editProduct.image instanceof File) {
      productData = URL.createObjectURL(editProduct.image);
    } else {
      productData = editProduct.image || 'https://via.placeholder.com/150';
    }
  
    const updatedProduct = { ...editProduct, image: productData };
  
    try {
      const response = await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, updatedProduct);
      setProducts(products.map(product => product._id === response.data._id ? response.data : product));
      setFilteredProducts(filteredProducts.map(product => product._id === response.data._id ? response.data : product));
      setEditProduct({
        name: '',
        brand: '',
        supplier: '',
        description: '',
        tags: '',
        category: '',
        inventory: '',
        price: '',
        channel: '',
        date: '',
        sellInStore: true,
        sellOnline: false,
        image: null,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isEditing) {
      setEditProduct((prevProduct) => ({
        ...prevProduct,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    if (isEditing) {
      setEditProduct((prevProduct) => ({
        ...prevProduct,
        image: e.target.files[0],
      }));
    } else {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        image: e.target.files[0],
      }));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      if (filters.search) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      if (filters.supplier) {
        filtered = filtered.filter((product) => product.supplier === filters.supplier);
      }
      if (filters.brand) {
        filtered = filtered.filter((product) => product.brand === filters.brand);
      }
      if (filters.category) {
        filtered = filtered.filter((product) => product.category === filters.category);
      }
      if (filters.tags) {
        filtered = filtered.filter((product) =>
          product.tags.toLowerCase().includes(filters.tags.toLowerCase())
        );
      }
      if (filters.status) {
        filtered = filtered.filter((product) => product.status === filters.status);
      }
      if (filters.channel) {
        filtered = filtered.filter((product) => product.channel === filters.channel);
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  return (
    <>
      <div className="product-details">
        <h2>Products</h2>
        <p>A list of all your products. <a href="#">Need help?</a></p>
        <button className="btn-add-product" onClick={handleAddProductClick}>Add product</button>
        
        <Modal isOpen={isAdding} onClose={() => setIsAdding(false)}>
          {/* Add Product Form */}
          <div className="add-product">
            <h3>Add New Product</h3>
            {/* Form fields for adding a new product */}
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Brand</label>
              <select name="brand" value={newProduct.brand} onChange={handleChange}>
                <option value="">Select a brand</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand.name}>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Supplier</label>
              <select name="supplier" value={newProduct.supplier} onChange={handleChange}>
                <option value="">Select a supplier</option>
                {suppliers.map((supplier, index) => (
                  <option key={index} value={supplier.name}>{supplier.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" name="description" value={newProduct.description} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tags</label>
              <input type="text" name="tags" value={newProduct.tags} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={newProduct.category} onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Inventory</label>
              <input type="number" name="inventory" value={newProduct.inventory} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" name="price" value={newProduct.price} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Channel</label>
              <select name="channel" value={newProduct.channel} onChange={handleChange}>
                <option value="">Select a channel</option>
                <option value="In-store">In-store</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sell in store</label>
              <input type="checkbox" name="sellInStore" checked={newProduct.sellInStore} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Sell online</label>
              <input type="checkbox" name="sellOnline" checked={newProduct.sellOnline} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input type="file" name="image" onChange={handleImageChange} />
            </div>
            <div className="form-group">
              <button className="btn-save" onClick={handleSaveProduct}>Save</button>
            </div>
          </div>
        </Modal>
        
        <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
          {/* Edit Product Form */}
          <div className="edit-product">
            <h3>Edit Product</h3>
            {/* Form fields for editing a product */}
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={editProduct.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Brand</label>
              <select name="brand" value={editProduct.brand} onChange={handleChange}>
                <option value="">Select a brand</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand.name}>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Supplier</label>
              <select name="supplier" value={editProduct.supplier} onChange={handleChange}>
                <option value="">Select a supplier</option>
                {suppliers.map((supplier, index) => (
                  <option key={index} value={supplier.name}>{supplier.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" name="description" value={editProduct.description} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tags</label>
              <input type="text" name="tags" value={editProduct.tags} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={editProduct.category} onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Inventory</label>
              <input type="number" name="inventory" value={editProduct.inventory} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" name="price" value={editProduct.price} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Channel</label>
              <select name="channel" value={editProduct.channel} onChange={handleChange}>
                <option value="">Select a channel</option>
                <option value="In-store">In-store</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sell in store</label>
              <input type="checkbox" name="sellInStore" checked={editProduct.sellInStore} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Sell online</label>
              <input type="checkbox" name="sellOnline" checked={editProduct.sellOnline} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input type="file" name="image" onChange={handleImageChange} />
            </div>
            <div className="form-group">
              <button className="btn-save" onClick={handleUpdateProduct}>Update</button>
            </div>
          </div>
        </Modal>
        
        <h3 className='filtertitle' onClick={toggleFilters} style={{ cursor: 'pointer' }}>
          Filters {showFilters ? '▲' : '▼'}
        </h3>
        {showFilters && (
          <div className="filters">
            <div className="form-group">
              <label>Search</label>
              <input type="text" name="search" value={filters.search} onChange={handleFilterChange} />
            </div>
            <div className="form-group">
              <label>Supplier</label>
              <select name="supplier" value={filters.supplier} onChange={handleFilterChange}>
                <option value="">Select a supplier</option>
                {suppliers.map((supplier, index) => (
                  <option key={index} value={supplier.name}>{supplier.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Brand</label>
              <select name="brand" value={filters.brand} onChange={handleFilterChange}>
                <option value="">Select a brand</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand.name}>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={filters.category} onChange={handleFilterChange}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Tags</label>
              <input type="text" name="tags" value={filters.tags} onChange={handleFilterChange} />
            </div>
            <div className="form-group">
              <label>Channel</label>
              <select name="channel" value={filters.channel} onChange={handleFilterChange}>
                <option value="">Select a channel</option>
                <option value="In-store">In-store</option>
                <option value="Online">Online</option>
              </select>
            </div>
          </div>
        )}
        <div className="product-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Supplier</th>
                <th>Inventory</th>
                <th>Price</th>
                <th>Channel</th>
                <th>Date</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.supplier}</td>
                  <td>{product.inventory}</td>
                  <td>{product.price}</td>
                  <td>{product.channel}</td>
                  <td>{product.date}</td>
                  <td>
                    <img src={`${url}/image/${product.image}`} alt={product.name} />
                  </td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEditProductClick(product)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeleteProductClick(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
