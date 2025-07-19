import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    displayedProducts: [],
    searchTerm: '',
    isLoading: false,
    error: null
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      if (action.payload.trim() === '') {
        state.displayedProducts = state.allProducts;
      } else {
        state.displayedProducts = state.allProducts.filter(product => 
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload;
        state.displayedProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer; 