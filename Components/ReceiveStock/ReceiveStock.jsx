import React, { useState } from 'react';
import Modal from 'react-modal';
import './ReceiveStock.css'; // Create a CSS file for ReceiveStock specific styles

const ReceiveStock = ({ onCancel }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [previewList, setPreviewList] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Mock list of products for demonstration purposes
    const allProducts = [
        { name: 'Airscream Pods', inventory: 100, colomboQty: 50, costPrice: 5.80, totalCost: 290.00 },
        // Add more products as needed
    ];

    // Function to handle search input
    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.trim() === '') {
            setFilteredProducts([]);
        } else {
            const results = allProducts.filter(product =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProducts(results);
        }
    };

    // Handle row click
    const handleRowClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Handle modal submission
    const handleModalSubmit = () => {
        const updatedProduct = {
            ...selectedProduct,
            qty: parseInt(quantity),
            costPrice: parseFloat(costPrice),
            totalCost: parseInt(quantity) * parseFloat(costPrice),
        };

        setPreviewList([...previewList, updatedProduct]);
        setShowModal(false);
        setQuantity('');
        setCostPrice('');
    };

    // Handle close modal
    const handleCloseModal = () => {
        setShowModal(false);
        setQuantity('');
        setCostPrice('');
    };

    return (
        <div className="receive-stock">
            <div className="receive-stock-header">
                <h1>Receive stock</h1>
                <p>Count and receive products that have been delivered from your suppliers to ensure your inventory stays accurate. <a href="#">Need help?</a></p>
                <div className="actions">
                    <button className="cancel" onClick={onCancel}>Cancel</button>
                    <button className="receive">Receive</button>
                </div>
            </div>
            <div className="delivery-details">
                <h2>Delivery details</h2>
                <p>Adding details to this delivery will help you stay on top of your orders and easily identify deliveries.</p>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Supplier</label>
                            <select>
                                <option>Select a supplier</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Delivery recipient</label>
                            <select>
                                <option>Colombo</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Supplier invoice number (Optional)</label>
                            <input type="text" placeholder="Enter a supplier invoice number" />
                        </div>
                        <div className="form-group">
                            <label>Delivery date</label>
                            <input type="date" value="2024-07-27" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Order number</label>
                            <input type="text" />
                            <small>20 characters max</small>
                        </div>
                        <div className="form-group">
                            <label>Note (Optional)</label>
                            <textarea placeholder="Enter a note for this delivery"></textarea>
                            <small>200 characters max</small>
                        </div>
                    </div>
                </form>
            </div>
            <div style={styles.container}>
                <div style={styles.textSection}>
                    <h2>Products</h2>
                    <p>Choose products to receive by searching.</p>
                </div>

                <div style={styles.tableSection}>
                    <div style={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                            style={styles.searchInput}
                        />
                    </div>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Current Inventory</th>
                                <th>Colombo Quantity</th>
                                <th>Cost Price (NZD)</th>
                                <th>Total Cost (NZD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <tr key={index} onClick={() => handleRowClick(product)} style={styles.tableRow}>
                                        <td>{product.name}</td>
                                        <td>{product.inventory}</td>
                                        <td>{product.colomboQty}</td>
                                        <td>${product.costPrice.toFixed(2)}</td>
                                        <td>${(product.costPrice * product.colomboQty).toFixed(2)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td style={{ textAlign: "center", padding: "20px" }} colSpan="5">Search For Product</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div style={styles.previewSection}>
                    <h3>Order Preview</h3>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th>Variant</th>
                                <th>Barcode</th>
                                <th>Quantity</th>
                                <th>Cost Price (NZD)</th>
                                <th>Total Cost (NZD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {previewList.length > 0 ? (
                                previewList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.barcode}</td>
                                        <td>{item.qty}</td>
                                        <td>${item.costPrice.toFixed(2)}</td>
                                        <td>${item.totalCost.toFixed(2)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td style={{ textAlign: "center", padding: "30px" }} colSpan="5">No items added to order</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: '500px',
                    },
                }}
                contentLabel="Update Product"
            >
                {selectedProduct && (
                    <>
                        <h2>Update Product</h2>
                        <div className="product-info">
                            <p><strong>Product Name:</strong> {selectedProduct.name}</p>
                            <p><strong>Current Inventory:</strong> {selectedProduct.inventory}</p>
                        </div>
                        <form>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div className="form-group">
                                <label>Cost Price (NZD)</label>
                                <input
                                    type="number"
                                    value={costPrice}
                                    onChange={(e) => setCostPrice(e.target.value)}
                                    step="0.01"
                                    style={styles.input}
                                />
                            </div>
                            <button type="button" onClick={handleModalSubmit} style={styles.addButton}>
                                Add to Order
                            </button>
                            <button type="button" onClick={handleCloseModal} style={styles.closeButton}>
                                Close
                            </button>
                        </form>
                    </>
                )}
            </Modal>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: '100vh',
    },
    textSection: {
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
    },
    tableSection: {
        flex: 1,
        padding: '20px',
        boxSizing: 'border-box',
    },
    searchBar: {
        marginBottom: '20px',
    },
    searchInput: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontSize: '16px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        border: '1px solid #ddd',
        padding: '12px',
        backgroundColor: '#f2f2f2',
        textAlign: 'left',
    },
    td: {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'left',
    },
    tableRow: {
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    selectedRow: {
        backgroundColor: '#e0e0e0',
    },
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        width: '80%',
        maxWidth: '900px',
    },
    input: {
        width: '80px',
        padding: '5px',
        boxSizing: 'border-box',
        marginRight: '10px',
    },
    addButton: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    closeButton: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
    previewSection: {
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
        marginTop: '20px',
    },
};

export default ReceiveStock;
