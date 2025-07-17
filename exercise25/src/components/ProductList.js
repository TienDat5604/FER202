import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/actions/productActions';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };
  
  if (loading) {
    return <div className="text-center mt-5"><h2>Loading products...</h2></div>;
  }
  
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Products</h2>
      <Row>
        {products.map(product => (
          <Col md={4} className="mb-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <div className="mb-2">
                  {product.catalogs.map((catalog, index) => (
                    <Badge bg="secondary" className="me-1" key={index}>
                      {catalog}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList; 