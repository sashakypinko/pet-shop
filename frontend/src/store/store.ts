import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.onSuccess', 'payload.onError'],
      },
    }).prepend(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export interface PayloadMeta {
  onSuccess: () => void;
  onError: () => void;
}

sagaMiddleware.run(rootSaga);
