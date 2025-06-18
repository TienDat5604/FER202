import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EmailPasswordValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // Email validation
  useEffect(() => {
    if (emailTouched) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        setEmailError('Email không hợp lệ. Vui lòng nhập lại!');
        setIsEmailValid(false);
      } else {
        setEmailError('');
        setIsEmailValid(true);
      }
    }
  }, [email, emailTouched]);

  // Password validation
  useEffect(() => {
    if (passwordTouched) {
      if (password.length < 8) {
        setPasswordError('Mật khẩu phải có ít nhất 8 ký tự!');
        setIsPasswordValid(false);
      } else {
        setPasswordError('');
        setIsPasswordValid(true);
      }
    }
  }, [password, passwordTouched]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    if (isEmailValid && isPasswordValid) {
      alert('Form hợp lệ! Email: ' + email + ', Mật khẩu: ' + password);
      // Gửi dữ liệu form
    } else {
      alert('Vui lòng kiểm tra lại thông tin đã nhập.');
    }
  };

  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <Container className="mt-5">
      <h2>Đăng nhập</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            isInvalid={emailTouched && !!emailError}
            isValid={emailTouched && !emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            isInvalid={passwordTouched && !!passwordError}
            isValid={passwordTouched && !passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EmailPasswordValidation; 