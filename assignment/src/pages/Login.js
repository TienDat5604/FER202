import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Modal, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailed } from '../store/slices/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Dispatch login start action
      dispatch(loginStart());
      
      // Validate login credentials
      const response = await axios.get(`http://localhost:3001/UserAccounts?username=${username}&password=${password}`);
      
      if (response.data && response.data.length > 0) {
        const user = response.data[0];
        setLoginUser(user);
        setShowModal(true);
        
        // Dispatch login success with user data
        dispatch(loginSuccess(user));
        
        setShowError(false);
      } else {
        dispatch(loginFailed('Invalid credentials'));
        setShowError(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch(loginFailed(error.message));
      setShowError(true);
    }
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };
  
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header as="h4" className="text-center">Login</Card.Header>
            <Card.Body>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              
              {showError && (
                <Alert variant="danger" className="mt-3">
                  Invalid username or password!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loginUser && (
            <p>Welcome, {loginUser.username} login Successful!</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Login; 