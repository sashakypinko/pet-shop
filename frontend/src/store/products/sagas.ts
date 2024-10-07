import {call, put, select, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import { ProductApi } from '../../services/api/product';
import {
    getProductsSuccess,
    getProductsError,
    getProducts, 
    setSelectedProductAfterFetch,
} from './slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {selectProducts} from '../selectors';

export function* getProductsSaga(): SagaIterator {
    try {
        const data = yield call(ProductApi.getAll);
        yield put(getProductsSuccess(data));
    } catch (error) {
        console.log([error]);
        yield put(getProductsError(error));
    }
}

function* changeSelectedProductSaga(action: PayloadAction<number>): SagaIterator {
    const { products } = yield select(selectProducts);

    if (!products.length) {
        yield put(getProducts());
        yield takeLatest(getProductsSuccess, function* () {
            yield put(setSelectedProductAfterFetch(action.payload));
        });
    } else {
        yield put(setSelectedProductAfterFetch(action.payload));
    }
}

export function* watchProducts() {
    yield takeLatest('products/getProducts', getProductsSaga);
    yield takeLatest('products/changeSelectedProduct', changeSelectedProductSaga);
}
