import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { CategoryApi } from '../../services/api/category';
import { getCategoriesSuccess, getCategoriesError, getCategories, setSelectedCategoryAfterFetch } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { selectCategories } from '../selectors';

export function* getCategoriesSaga(): SagaIterator {
  try {
    const data = yield call(CategoryApi.getAll);
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    console.log([error]);
    yield put(getCategoriesError(error));
  }
}

function* changeSelectedCategorySaga(action: PayloadAction<number>): SagaIterator {
  const { categories } = yield select(selectCategories);

  if (!categories.length) {
    yield put(getCategories());
    yield takeLatest(getCategoriesSuccess, function* () {
      yield put(setSelectedCategoryAfterFetch(action.payload));
    });
  } else {
    yield put(setSelectedCategoryAfterFetch(action.payload));
  }
}

export function* watchCategories() {
  yield takeLatest('categories/getCategories', getCategoriesSaga);
  yield takeLatest('categories/changeSelectedCategory', changeSelectedCategorySaga);
}
