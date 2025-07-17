// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// Action Creators
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const updateCart = (product, quantity) => {
  return {
    type: UPDATE_CART,
    payload: { 
      product,
      quantity 
    }
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    payload: productId
  };
}; 