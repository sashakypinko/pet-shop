import categoriesReducer from './categories/slice';
import productsReducer from './products/slice';
import cartReducer from './cart/slice';

const rootReducers = {
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
};

export default rootReducers;
