import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './filter/filterReducer';
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
} from 'redux-persist'
import userReducer from './auth/authSlice'
import contactReduser from 'redux/contacts/contactsSlice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
}
export const store = configureStore({
    reducer: {
        search: contactsReducer,
        auth:persistReducer(authPersistConfig,userReducer) ,
        contacts:contactReduser,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor=persistStore(store)