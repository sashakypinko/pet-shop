import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ProductApi } from '../../services/api/product';
import { getProductsSuccess, getProductsError, setSelectedProductSuccess, setSelectedProductError } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { setSelectedCategory } from '../categories/slice';

export function* getProductsSaga(): SagaIterator {
  try {
    const data = yield call(ProductApi.getAll);
    yield put(getProductsSuccess(data));
  } catch (error) {
    console.log([error]);
    yield put(getProductsError(error));
  }
}

export function* setSelectedProductSaga({ payload }: PayloadAction<number>): SagaIterator {
  try {
    const data = yield call(ProductApi.getById, payload);
    yield put(setSelectedProductSuccess(data));
    yield put(setSelectedCategory(data.categoryId));
  } catch (error) {
    console.log([error]);
    yield put(setSelectedProductError(error));
  }
}

export function* watchProducts() {
  yield takeLatest('products/getProducts', getProductsSaga);
  yield takeLatest('products/setSelectedProduct', setSelectedProductSaga);
}
