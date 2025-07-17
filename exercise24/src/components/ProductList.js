import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/actions/cartActions';
import products from '../data/products';

const ProductList = () => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateCart = (product) => {
    const quantity = quantities[product.id] || 1;
    dispatch(updateCart(product, quantity));
  };

  const handleDeleteFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({
      ...quantities,
      [productId]: parseInt(quantity)
    });
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="product-item" style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Catalogs:</strong> {product.catalogs.join(', ')}</p>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor={`quantity-${product.id}`}>Quantity: </label>
            <input
              type="number"
              id={`quantity-${product.id}`}
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ width: '50px', marginLeft: '10px' }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={() => handleAddToCart(product)}
              style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
            <button 
              onClick={() => handleUpdateCart(product)}
              style={{ background: '#2196F3', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Update Cart
            </button>
            <button 
              onClick={() => handleDeleteFromCart(product.id)}
              style={{ background: '#f44336', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList; 