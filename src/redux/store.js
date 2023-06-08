import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userReducer } from "react";
import cartReducer from "./cartRedux"
import userRedux from "./userRedux";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducers = combineReducers({user: userRedux, cart: cartReducer})
  
  const persistedReducer = persistReducer(persistConfig, rootReducers)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)


