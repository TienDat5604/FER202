import productsData from '../../data/products';

// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const fetchProducts = () => {
  // Using Redux Thunk to simulate an API call
  return (dispatch) => {
    // Simulate API delay
    setTimeout(() => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: productsData
      });
    }, 500);
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    // Here you could make an API call to add a product to your backend
    // For now we'll just dispatch the action directly
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        ...product,
        id: Date.now().toString() // Simple way to generate a unique ID
      }
    });
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  };
};

export const updateCartQuantity = (productId, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { productId, quantity }
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
}; 