import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

function LaptopDetail({ user, onLogout }) {
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
        setLaptop(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laptop details:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchLaptopDetails();
  }, [id]);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <h2>Loading...</h2>
      </Container>
    );
  }

  if (error || !laptop) {
    return (
      <Container className="text-center mt-5">
        <h2>404 - Laptop Not Found</h2>
        <p>The laptop you're looking for doesn't exist or has been removed.</p>
        <Link to="/laptops">
          <Button variant="primary">Back to Laptop List</Button>
        </Link>
      </Container>
    );
  }

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
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Row className="g-0">
                <Col md={6}>
                  <Card.Img 
                    src={laptop.image} 
                    alt={`${laptop.brand} ${laptop.model}`} 
                    className="img-fluid rounded-start"
                    style={{ objectFit: 'contain', height: '100%', padding: '20px' }}
                  />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title as="h2">{laptop.brand} {laptop.model}</Card.Title>
                    <Card.Text>
                      <strong>Year:</strong> {laptop.year}<br/>
                      <strong>Price:</strong> {laptop.price}<br/>
                      <strong>Description:</strong> This {laptop.brand} {laptop.model} from {laptop.year} 
                      is a high-performance laptop with exceptional build quality and features.
                      Perfect for both professional work and entertainment.
                    </Card.Text>
                    <Link to="/laptops">
                      <Button variant="primary">Back to Laptop List</Button>
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

LaptopDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    account_type: PropTypes.string.isRequired
  }).isRequired,
  onLogout: PropTypes.func.isRequired
};

export default LaptopDetail; 