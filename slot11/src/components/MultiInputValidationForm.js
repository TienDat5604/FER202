import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MultiInputValidationForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [terms, setTerms] = useState(false);

  const [nameError, setNameError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isGenderValid, setIsGenderValid] = useState(false);
  const [isCountryValid, setIsCountryValid] = useState(false);
  const [isTermsValid, setIsTermsValid] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [countryTouched, setCountryTouched] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);

  // Name validation (at least 3 characters)
  useEffect(() => {
    if (nameTouched) {
      if (name.length >= 3) {
        setIsNameValid(true);
        setNameError('');
      } else {
        setIsNameValid(false);
        setNameError('Tên phải có ít nhất 3 ký tự.');
      }
    }
  }, [name, nameTouched]);

  // Gender validation (at least one selected)
  useEffect(() => {
    if (genderTouched) {
      if (gender) {
        setIsGenderValid(true);
        setGenderError('');
      } else {
        setIsGenderValid(false);
        setGenderError('Vui lòng chọn giới tính.');
      }
    }
  }, [gender, genderTouched]);

  // Country validation (a country selected)
  useEffect(() => {
    if (countryTouched) {
      if (country) {
        setIsCountryValid(true);
        setCountryError('');
      } else {
        setIsCountryValid(false);
        setCountryError('Vui lòng chọn quốc gia.');
      }
    }
  }, [country, countryTouched]);

  // Terms and Conditions validation (checkbox checked)
  useEffect(() => {
    if (termsTouched) {
      if (terms) {
        setIsTermsValid(true);
        setTermsError('');
      } else {
        setIsTermsValid(false);
        setTermsError('Bạn phải đồng ý với các điều khoản và điều kiện.');
      }
    }
  }, [terms, termsTouched]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setGenderTouched(true);
    setCountryTouched(true);
    setTermsTouched(true);

    if (isNameValid && isGenderValid && isCountryValid && isTermsValid) {
      alert(
        `Form hợp lệ!\nTên: ${name}\nGiới tính: ${gender}\nQuốc gia: ${country}\nĐồng ý điều khoản: ${terms}`
      );
      // Gửi dữ liệu form
    } else {
      alert('Vui lòng kiểm tra lại thông tin đã nhập.');
    }
  };

  const isFormValid = isNameValid && isGenderValid && isCountryValid && isTermsValid;

  return (
    <Container className="mt-5">
      <h2>Đăng ký</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name */} 
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            isInvalid={nameTouched && !!nameError}
            isValid={nameTouched && !nameError}
          />
          <Form.Control.Feedback type="invalid">
            {nameError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Gender Radio Buttons */} 
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="genderMale"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                onBlur={() => setGenderTouched(true)}
                isInvalid={genderTouched && !!genderError}
                checked={gender === "Male"}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="genderFemale"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                onBlur={() => setGenderTouched(true)}
                isInvalid={genderTouched && !!genderError}
                checked={gender === "Female"}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Other"
                name="gender"
                id="genderOther"
                value="Other"
                onChange={(e) => setGender(e.target.value)}
                onBlur={() => setGenderTouched(true)}
                isInvalid={genderTouched && !!genderError}
                checked={gender === "Other"}
              />
            </Col>
          </Row>
          <Form.Control.Feedback type="invalid" className={genderTouched && !!genderError ? 'd-block' : 'd-none'}>
            {genderError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Country Dropdown */} 
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={() => setCountryTouched(true)}
            isInvalid={countryTouched && !!countryError}
            isValid={countryTouched && !countryError}
          >
            <option value="">Chọn quốc gia</option>
            <option value="Việt Nam">Việt Nam</option>
            <option value="Mỹ">Mỹ</option>
            <option value="Anh">Anh</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {countryError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Terms and Conditions Checkbox */} 
        <Form.Group className="mb-3" controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            onBlur={() => setTermsTouched(true)}
            isInvalid={termsTouched && !!termsError}
            isValid={termsTouched && !termsError}
          />
          <Form.Control.Feedback type="invalid">
            {termsError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default MultiInputValidationForm; 