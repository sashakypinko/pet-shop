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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedCategory: (state: CategoriesState, action: PayloadAction<number>) => {
      state.selectedCategory = null;
      state.loading = true;
      state.error = null;
    },
    setSelectedCategorySuccess: (state: CategoriesState, { payload: category }: PayloadAction<ICategory>) => {
      state.loading = false;
      state.selectedCategory = category;
    },
    setSelectedCategoryError: (state: CategoriesState, { payload: error }: PayloadAction<any>) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesError,
  setSelectedCategory,
  setSelectedCategorySuccess,
  setSelectedCategoryError,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
