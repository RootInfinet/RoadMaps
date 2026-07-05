import { configureStore } from '@reduxjs/toolkit';
import UserSlice from "../Redux/UserSlice";
import { persistStore, persistReducer } from 'redux-persist';

import localStorageStorage from 'redux-persist/lib/storage'; 
const storage = localStorageStorage.default || localStorageStorage;

const persistConfig = {
  key: 'root',
  storage, 
};

const persistedReducer = persistReducer(persistConfig, UserSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);