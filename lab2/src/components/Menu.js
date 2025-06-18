import React from 'react';
import PizzaCard from './PizzaCard';

const Menu = () => {
  const pizzas = [
    {
      id: 1,
      image: '/hero-pizza.jpg',
      title: 'Margherita Pizza',
      price: '40.00',
      originalPrice: '52.00',
      badge: 'SALE'
    },
    {
      id: 2,
      image: '/pizza2.jpg',
      title: 'Mushroom Pizza',
      price: '25.00',
      originalPrice: null,
      badge: null
    },
    {
      id: 3,
      image: '/pizza3.jpg',
      title: 'Hawaiian Pizza',
      price: '10.00',
      originalPrice: null,
      badge: 'NEW'
    },
    {
      id: 4,
      image: '/pizza4.jpg',
      title: 'Pesto Pizza',
      price: '40.00',
      originalPrice: '50.00',
      badge: 'SALE'
    }
  ];

  return (
    <section id="menu" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row">
          {pizzas.map(pizza => (
            <PizzaCard
              key={pizza.id}
              image={pizza.image}
              title={pizza.title}
              price={pizza.price}
              originalPrice={pizza.originalPrice}
              badge={pizza.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 