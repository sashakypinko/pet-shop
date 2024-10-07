import { type RootState } from './store';
import { CategoriesState } from './categories/types';
import {ProductsState} from './products/types';
import {CartState} from './cart/types';

export const selectCategories = (state: RootState): CategoriesState => state.categories;

export const selectProducts = (state: RootState): ProductsState => state.products;

export const selectCart = (state: RootState): CartState => state.cart;
