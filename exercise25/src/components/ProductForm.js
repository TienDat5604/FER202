import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import { Container, Form, Button, Row, Col, Card, Badge } from 'react-bootstrap';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    catalogs: '',
    image: 'https://via.placeholder.com/150'
  });
  const [validated, setValidated] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Process catalogs as an array
    const catalogsArray = formData.catalogs
      .split(',')
      .map(cat => cat.trim())
      .filter(cat => cat !== '');
    
    // Create the new product object
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      catalogs: catalogsArray
    };
    
    // Dispatch the action to add the product
    dispatch(addProduct(newProduct));
    
    // Reset the form
    setFormData({
      name: '',
      price: '',
      description: '',
      catalogs: '',
      image: 'https://via.placeholder.com/150'
    });
    
    setValidated(false);
    alert('Product added successfully!');
  };
  
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h2 className="mb-4">Add New Product</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a product name.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                min="0.01"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid price.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a product description.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="productCatalogs">
              <Form.Label>Catalogs (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                name="catalogs"
                value={formData.catalogs}
                onChange={handleChange}
                placeholder="Electronics, Computers, Gaming"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide at least one catalog.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="productImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an image URL.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </Col>
        
        <Col md={6}>
          <h3 className="mb-4">Preview</h3>
          <Card>
            <Card.Img variant="top" src={formData.image} />
            <Card.Body>
              <Card.Title>{formData.name || 'Product Name'}</Card.Title>
              <Card.Text>
                {formData.price ? `$${parseFloat(formData.price).toFixed(2)}` : '$0.00'}
              </Card.Text>
              <Card.Text>{formData.description || 'Product Description'}</Card.Text>
              <div>
                {formData.catalogs && 
                  formData.catalogs
                    .split(',')
                    .map(cat => cat.trim())
                    .filter(cat => cat !== '')
                    .map((catalog, index) => (
                      <Badge bg="secondary" className="me-1" key={index}>
                        {catalog}
                      </Badge>
                    ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm; 