import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { CategoryApi } from '../../services/api/category';
import {
  getCategoriesSuccess,
  getCategoriesError,
  setSelectedCategorySuccess,
  setSelectedCategoryError,
} from './slice';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getCategoriesSaga(): SagaIterator {
  try {
    const data = yield call(CategoryApi.getAll);
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    console.log([error]);
    yield put(getCategoriesError(error));
  }
}

function* setSelectedCategorySaga({ payload }: PayloadAction<number>): SagaIterator {
  try {
    const data = yield call(CategoryApi.getById, payload);
    yield put(setSelectedCategorySuccess(data));
  } catch (error) {
    console.log([error]);
    yield put(setSelectedCategoryError(error));
  }
}

export function* watchCategories() {
  yield takeLatest('categories/getCategories', getCategoriesSaga);
  yield takeLatest('categories/setSelectedCategory', setSelectedCategorySaga);
}
