import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { TProduct, TProductsState } from './types';
import { fetchProducts } from './asyncThunk';

export const initialState: TProductsState = {
  products: [],
  loadingProducts: false,
  error: null
};

const productsSlice = createSlice({
  name: 'allproducts',
  initialState,
  reducers: { 
    toggleLike: (state, action: PayloadAction<string>) => {
    const product = state.products.find(p => p._id === action.payload);
    if (product) {
      product.isLiked = !product.isLiked;
    }
     },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p=> p._id !== action.payload);
    },
    addNewProduct: (state, action: PayloadAction<TProduct>) => {
      state.products = [action.payload, ...state.products];
    },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loadingProducts = true;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loadingProducts = false;
        state.error = action.error.message || 'Ошибка';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loadingProducts = false;
        state.products = [...state.products, ...action.payload];
      });
  },
});

export const { reducer } = productsSlice;
export const { toggleLike, deleteCard, addNewProduct } = productsSlice.actions;

export const getProductsSelector = (state: { allproducts: TProductsState }) =>
  state.allproducts.products;
export const productsLoadingSelector = (state: { allproducts: TProductsState }) =>
  state.allproducts.loadingProducts;
export const likedProductsSelector = createSelector(
  getProductsSelector,
  (products) => products.filter(product => product.isLiked)
);
 const chosenProductSelector = (productId: string) => createSelector(
  getProductsSelector,
  (products) => products.find(product => product._id === productId)
);

export const getProductById = (id: string) => (state: { allproducts: TProductsState }) =>
  chosenProductSelector(id)(state);
