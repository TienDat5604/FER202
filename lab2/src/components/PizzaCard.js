import React from 'react';

const PizzaCard = ({ image, title, price, originalPrice, badge }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card position-relative">
        {badge && (
          <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
            {badge}
          </span>
        )}
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          {originalPrice ? (
            <p className="card-text text-danger">
              ${price} <del>${originalPrice}</del>
            </p>
          ) : (
            <p className="card-text">${price}</p>
          )}
          <a href="#" className="btn btn-dark">Buy</a>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard; 