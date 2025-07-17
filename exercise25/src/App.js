import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

// Wrapper component to access Redux state for the cart badge
const AppNavbar = () => {
  const { cartItems } = useSelector(state => state.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Redux Thunk Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
            <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart 
              {cartItemCount > 0 && (
                <Badge bg="danger" pill className="ms-1">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// App component with routing
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
