import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuItems.css';

function MenuItems() {
  const menuItems = [
    { id: 1, image: 'images/menu-01.jpg', title: 'Menu 1' },
    { id: 2, image: 'images/menu-02.jpg', title: 'Menu 2' },
    { id: 3, image: 'images/menu-03.jpg', title: 'Menu 3' },
    { id: 4, image: 'images/menu-04.jpg', title: 'Menu 4' },
    { id: 5, image: 'images/menu-05.jpg', title: 'Menu 5' },
    { id: 6, image: 'images/menu-06.jpg', title: 'Menu 6' },
  ];

  return (
    <Container className="menu-items-container text-center">
      <Row className="justify-content-center">
        {menuItems.map(item => (
          <Col xs={4} md={2} key={item.id} className="menu-item">
            <Link to={`/menu/${item.id}`}>
              <Image src={item.image} roundedCircle className="menu-thumbnail" alt={item.title} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuItems; 