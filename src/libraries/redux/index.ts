import {breedsApi} from '@/api/breeds/breedsApi';
import {newspaperApi} from '@/api/newspaper/newspaperApi';
import {journalsApi} from '@/api/journals/journalsApi';
import {exchangeApi} from '@/api/exchange/exchangeApi';
import {configureStore} from '@reduxjs/toolkit';
import loading from '@/slices/loadingSlice';

const store = configureStore({
  reducer: {
    loading,
    [breedsApi.reducerPath]: breedsApi.reducer,
    [newspaperApi.reducerPath]: newspaperApi.reducer,
    [journalsApi.reducerPath]: journalsApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      breedsApi.middleware,
      newspaperApi.middleware,
      journalsApi.middleware,
      exchangeApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
