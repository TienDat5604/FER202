# Exercise 24: Redux Shopping Cart

This project demonstrates the implementation of a shopping cart using React and Redux.

## Features

- Display a list of products with their details (id, name, price, description, catalogs)
- Add products to cart
- Update product quantities in cart
- Delete products from cart
- Calculate total price

## Redux Implementation

The application uses Redux for state management with the following structure:

- **Actions**: Add to cart, update cart, delete from cart
- **Reducers**: Handle state updates based on actions
- **Store**: Central state management

## Project Structure

```
src/
├── components/
│   ├── Cart.js          # Shopping cart component
│   └── ProductList.js   # Product listing with CRUD buttons
├── data/
│   └── products.js      # Sample product data
├── redux/
│   ├── actions/
│   │   └── cartActions.js # Action creators
│   ├── reducers/
│   │   └── cartReducer.js # State reducer
│   └── store.js         # Redux store configuration
└── App.js              # Main application component
```

## How to Run

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Functionality

- **Add to Cart**: Adds a product to the cart (increases quantity if already in cart)
- **Update Cart**: Updates the product quantity in the cart
- **Delete from Cart**: Removes a product from the cart

## Learning Objectives

This exercise demonstrates:
- Setting up Redux in a React application
- Creating and dispatching actions
- Managing state with reducers
- Connecting React components to Redux store
- Working with multiple components that share state
