import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setSearchTerm } from '../store/slices/productSlice';
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const { displayedProducts, searchTerm, isLoading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h2>Product List</h2>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search laptops by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      
      {error && <p className="error-message">{error}</p>}
      
      {isLoading ? (
        <div className="loading">Loading products...</div>
      ) : displayedProducts.length === 0 ? (
        <div className="no-products">No products found matching your search.</div>
      ) : (
        <ul className="products-grid">
          {displayedProducts.map((product) => (
            <li key={product.id} className="product-card">
              <img
                src={`/Images/${product.image}`}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                  <span className="original-price">{product.price} đ</span>
                  <span className="current-price">{product.currentPrice} đ</span>
                </div>
                <div className="product-actions">
                  <Link to={`/products/${product.id}`} className="view-details-btn">
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
