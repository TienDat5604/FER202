import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Tên đăng nhập không được để trống";
    }
    if (!password.trim()) {
      newErrors.password = "Mật khẩu không được để trống";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Giả lập quá trình đăng nhập
      // Trong thực tế, bạn sẽ gọi API để xác thực người dùng
      if (username === "admin" && password === "password123") {
        setLoginStatus(`Login successfully with username: ${username}`);
        setLoginError(false);
        
        // Chờ 2 giây trước khi chuyển hướng
        setTimeout(() => {
          navigate("/posts");
        }, 2000);
      } else {
        setLoginStatus("Sai tên đăng nhập hoặc mật khẩu");
        setLoginError(true);
      }
    } catch (error) {
      setLoginStatus("Có lỗi xảy ra khi đăng nhập");
      setLoginError(true);
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header as="h4" className="text-center bg-primary text-white">
              Đăng Nhập
            </Card.Header>
            <Card.Body>
              {loginStatus && (
                <Alert variant={loginError ? "danger" : "success"}>
                  {loginStatus}
                </Alert>
              )}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Đăng Nhập
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func
};

export default Login; 