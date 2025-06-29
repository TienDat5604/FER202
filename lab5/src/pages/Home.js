import React from 'react';
import { Container } from 'react-bootstrap';
import HomeCarousel from '../components/Carousel';
import MenuItems from '../components/MenuItems';
import './Home.css';

function Home() {
  return (
    <div>
      <HomeCarousel />
      <Container className="mt-4">
        <MenuItems />
        <h2 className="text-danger text-center mt-3">This is Home Page</h2>
      </Container>
    </div>
  );
}

export default Home; 