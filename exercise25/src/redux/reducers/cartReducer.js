import { 
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART
} from '../actions/productActions';

const initialState = {
  cartItems: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If item already exists in cart, increase quantity
        const updatedCartItems = state.cartItems.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        
        return {
          ...state,
          cartItems: updatedCartItems,
          total: state.total + action.payload.price
        };
      } else {
        // If item doesn't exist in cart, add it with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price
        };
      }
    
    case REMOVE_FROM_CART:
      const itemToRemove = state.cartItems.find(item => item.id === action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      };
      
    case UPDATE_CART_QUANTITY:
      const { productId, quantity } = action.payload;
      const targetItem = state.cartItems.find(item => item.id === productId);
      const quantityDiff = quantity - targetItem.quantity;
      
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.id === productId 
            ? { ...item, quantity: quantity } 
            : item
        ),
        total: state.total + (targetItem.price * quantityDiff)
      };
      
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        total: 0
      };
      
    default:
      return state;
  }
};

export default cartReducer; 