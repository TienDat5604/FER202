import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, deleteFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (product, quantity) => {
    dispatch(updateCart(product, parseInt(quantity)));
  };

  const handleRemoveItem = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart" style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart" style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item" style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3>{item.name}</h3>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Catalogs:</strong> {item.catalogs.join(', ')}</p>
            </div>
            <div>
              <label htmlFor={`cart-quantity-${item.id}`}>Quantity: </label>
              <input
                type="number"
                id={`cart-quantity-${item.id}`}
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item, e.target.value)}
                style={{ width: '50px', marginLeft: '10px' }}
              />
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={{ background: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
              >
                Remove
              </button>
            </div>
          </div>
          <p><strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="cart-total" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd', textAlign: 'right' }}>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart; 