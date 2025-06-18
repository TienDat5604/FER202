import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner position-relative">
      <div className="carousel-item active">
        <img
          src="/pizza1.jpg"
          className="d-block w-100 hero-img"
          alt="Neapolitan Pizza"
        />
        <div className="carousel-caption text-center">
          <h2 className="display-4 fw-bold">Neapolitan Pizza</h2>
          <p className="lead">
            If you are looking for a traditional Italian pizza, the Neapolitan
            is the best option!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 