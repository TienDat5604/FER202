import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

function LaptopList({ user, onLogout }) {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Laptops');
        setLaptops(response.data);
        setFilteredLaptops(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laptops:', error);
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  // This effect will run whenever searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop => 
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  }, [searchTerm, laptops]);

  const handleSearch = (e) => {
    e.preventDefault();
    // The filtering is already done by the useEffect above
    console.log("Searching for:", searchTerm);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Laptop Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="text-light me-3 d-flex align-items-center">
                Welcome, {user.username}
              </Nav.Item>
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h2 className="mb-4">Laptop List</h2>
        
        <Form onSubmit={handleSearch} className="mb-4">
          <Row>
            <Col md={8}>
              <Form.Control
                type="text"
                placeholder="Search by brand or model"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </Col>
            <Col md={4}>
              <Button type="submit" variant="primary" className="w-100">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        
        {loading ? (
          <div className="text-center">
            <p>Loading laptops...</p>
          </div>
        ) : (
          <Row>
            {filteredLaptops.length > 0 ? (
              filteredLaptops.map(laptop => (
                <Col md={4} className="mb-4" key={laptop.id}>
                  <Card>
                    <Card.Img 
                      variant="top" 
                      src={laptop.image} 
                      alt={`${laptop.brand} ${laptop.model}`}
                      height="200"
                      style={{ objectFit: 'contain', padding: '10px' }}
                    />
                    <Card.Body>
                      <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                      <Card.Text>
                        Year: {laptop.year}<br/>
                        Price: {laptop.price}
                      </Card.Text>
                      <Link to={`/laptops/${laptop.id}`}>
                        <Button variant="primary">View Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center">No laptops found matching your search.</p>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
}

LaptopList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    account_type: PropTypes.string.isRequired
  }).isRequired,
  onLogout: PropTypes.func.isRequired
};

export default LaptopList; 