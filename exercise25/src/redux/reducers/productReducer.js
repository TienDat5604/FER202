import { FETCH_PRODUCTS, ADD_PRODUCT } from '../actions/productActions';

const initialState = {
  products: [],
  loading: true,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};

export default productReducer; 