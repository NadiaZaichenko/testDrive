import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { noticeSlice } from './slice';

const persistConfig = {
    key: 'car',
    storage,
    whitelist: ['favorite'],
  };

const persistedReducer = persistReducer(persistConfig, noticeSlice.reducer);

export const store = configureStore({
    reducer: {
     car: persistedReducer,
     notices: noticeSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);