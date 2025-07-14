import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1">404</h1>
          <h2>Page Not Found</h2>
          <p className="lead">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary">Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound; 