import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../services/api/product/dto/product.dto';
import { ProductsState } from './types';

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state: ProductsState) => {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess: (state: ProductsState, { payload: products }: PayloadAction<IProduct[]>) => {
      state.loading = false;
      state.products = products;
    },
    getProductsError: (state: ProductsState, { payload: error }: PayloadAction<any>) => {
      state.loading = false;
      state.error = error;
    },
    changeSelectedProduct: (state: ProductsState, action: PayloadAction<number>) => {
      state.loading = true;
      state.selectedProduct = null;
    },
    setSelectedProductAfterFetch: (state: ProductsState, { payload }: PayloadAction<number>) => {
      state.loading = false;
      state.selectedProduct = state.products.find(({ id }) => id === payload) || null;
    },
  },
});

export const {
  getProducts,
  getProductsSuccess,
  getProductsError,
  changeSelectedProduct,
  setSelectedProductAfterFetch,
} = productsSlice.actions;

export default productsSlice.reducer;
