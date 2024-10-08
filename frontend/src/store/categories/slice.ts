import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../services/api/category/dto/category.dto';
import { CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state: CategoriesState) => {
      state.loading = true;
      state.error = null;
    },
    getCategoriesSuccess: (state: CategoriesState, { payload: categories }: PayloadAction<ICategory[]>) => {
      state.loading = false;
      state.categories = categories;
    },
    getCategoriesError: (state: CategoriesState, { payload: error }: PayloadAction<any>) => {
      state.loading = false;
      state.error = error;
    },
    changeSelectedCategory: (state: CategoriesState, action: PayloadAction<number>) => {
      state.loading = true;
      state.selectedCategory = null;
    },
    setSelectedCategoryAfterFetch: (state: CategoriesState, { payload }: PayloadAction<number>) => {
      state.loading = false;
      state.selectedCategory = state.categories.find(({ id }) => id === payload) || null;
    },
  },
});

export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesError,
  changeSelectedCategory,
  setSelectedCategoryAfterFetch,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
