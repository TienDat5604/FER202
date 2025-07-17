import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from '../actions/cartActions';

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if product already exists in cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If product exists, increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      // If product doesn't exist in cart, add it with quantity 1
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case UPDATE_CART:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.product.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    default:
      return state;
  }
};

export default cartReducer; 