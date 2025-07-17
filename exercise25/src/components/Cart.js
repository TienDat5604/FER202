import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity, clearCart } from '../redux/actions/productActions';
import { Container, Table, Button, Form, Row, Col, Badge } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector(state => state.cart);
  
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };
  
  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCartQuantity(productId, parseInt(quantity)));
  };
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  if (cartItems.length === 0) {
    return (
      <Container className="mt-4">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </Container>
    );
  }
  
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Catalogs</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '50px', marginRight: '10px' }} 
                />
                {item.name}
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                {item.catalogs.map((catalog, index) => (
                  <Badge bg="secondary" className="me-1" key={index}>
                    {catalog}
                  </Badge>
                ))}
              </td>
              <td>
                <Form.Control
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  style={{ width: '70px' }}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Row className="mt-4">
        <Col md={8}>
          <Button 
            variant="outline-danger" 
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
        </Col>
        <Col md={4} className="text-end">
          <h4>Total: ${total.toFixed(2)}</h4>
          <Button variant="success" size="lg" className="mt-2">
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart; 