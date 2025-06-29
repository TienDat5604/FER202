import React from 'react';
import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to our Quiz App</h3>
          <p>Test your knowledge with our interactive quizzes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Latest Food News</h3>
          <p>Stay updated with the latest culinary trends</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Join Our Community</h3>
          <p>Connect with fellow food enthusiasts</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel; 