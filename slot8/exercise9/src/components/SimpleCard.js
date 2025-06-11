import React from 'react';
import './SimpleCard.css';

// Title component
const Title = ({ text }) => {
  return <div className="card-title">{text}</div>;
};

// Description component
const Description = ({ text }) => {
  return <div className="card-description">{text}</div>;
};

// Image component
const Image = ({ url }) => {
  return (
    <div className="card-image-container">
      <img src={url} alt="Card" className="card-image" />
    </div>
  );
};

// SimpleCard component
const SimpleCard = ({ item }) => {
  const { title, description, imageUrl } = item;
  
  return (
    <div className="simple-card">
      <Image url={imageUrl} />
      <div className="card-content">
        <Title text={title} />
        <Description text={description} />
      </div>
    </div>
  );
};

export default SimpleCard; 