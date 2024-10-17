import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../services/storage/cart/dto/cart-item.dto';
import { CartState } from './types';
import CartStorage from '../../services/storage/cart';

const initialState: CartState = {
  cartItems: [],
  totalCount: 0,
  totalAmount: 0,
};

const calculateTotalAmount = (cartItems: ICartItem[]): number => {
  return cartItems.reduce((total, { product, count }) => {
    return product.finalPrice * count + total;
  }, 0);
};

const calculateTotalCount = (cartItems: ICartItem[]): number => {
  return cartItems.reduce((total, { count }) => count + total, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItems: (state: CartState) => {
      const cartItems = CartStorage.getItems();

      state.cartItems = cartItems;
      state.totalAmount = calculateTotalAmount(cartItems);
      state.totalCount = calculateTotalCount(cartItems);
    },
    addCartItem: (state: CartState, { payload }: PayloadAction<ICartItem>) => {
      const cartItemIdx = state.cartItems.findIndex(({ product }) => product.id === payload.product.id);

      if (cartItemIdx === -1) {
        state.cartItems = [...state.cartItems, payload];
      } else {
        state.cartItems = [
          ...state.cartItems.slice(0, cartItemIdx),
          {
            ...payload,
            count: state.cartItems[cartItemIdx].count + payload.count,
          },
          ...state.cartItems.slice(cartItemIdx + 1),
        ];
      }

      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.totalCount = calculateTotalCount(state.cartItems);

      CartStorage.updateItems(state.cartItems);
    },
    updateCartItem: (state: CartState, { payload }: PayloadAction<ICartItem>) => {
      const cartItemIdx = state.cartItems.findIndex(({ product }) => product.id === payload.product.id);

      state.cartItems = [
        ...state.cartItems.slice(0, cartItemIdx),
        ...(payload.count ? [payload] : []),
        ...state.cartItems.slice(cartItemIdx + 1),
      ];

      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.totalCount = calculateTotalCount(state.cartItems);

      CartStorage.updateItems(state.cartItems);
    },
    removeCartItem: (state: CartState, { payload }: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(({ product }) => product.id !== payload);
      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.totalCount = calculateTotalCount(state.cartItems);

      CartStorage.updateItems(state.cartItems);
    },
  },
});

export const { getCartItems, addCartItem, updateCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
