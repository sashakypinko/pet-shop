import { all, fork } from 'redux-saga/effects';

import { watchCategories } from './categories/sagas';
import { watchProducts } from './products/sagas';

const rootSaga = function* () {
  yield all([fork(watchCategories), fork(watchProducts)]);
};

export default rootSaga;
