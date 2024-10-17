import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../services/api/product/dto/product.dto';
import { ProductsState } from './types';

const addFinalPriceGetter = (product: IProduct): IProduct => {
  Object.defineProperty(product, 'finalPrice', {
    get() {
      return product.discont_price ?? product.price ?? 0;
    },
    enumerable: true,
  });
  
  return product;
};

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
      state.products = products.map(addFinalPriceGetter);
    },
    getProductsError: (state: ProductsState, { payload: error }: PayloadAction<any>) => {
      state.loading = false;
      state.error = error;
    },
    setSelectedProduct: (state: ProductsState, action: PayloadAction<number>) => {
      state.selectedProduct = null;
      state.loading = true;
      state.error = null;
    },
    setSelectedProductSuccess: (state: ProductsState, { payload: product }: PayloadAction<IProduct>) => {
      state.loading = false;
      state.selectedProduct = addFinalPriceGetter(product);
    },
    setSelectedProductError: (state: ProductsState, { payload: error }: PayloadAction<any>) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const {
  getProducts,
  getProductsSuccess,
  getProductsError,
  setSelectedProduct,
  setSelectedProductSuccess,
  setSelectedProductError,
} = productsSlice.actions;

export default productsSlice.reducer;
