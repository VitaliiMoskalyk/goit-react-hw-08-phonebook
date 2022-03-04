import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './filter/filterReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore} from 'redux-persist'
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
    middleware:getDefaultMiddleware=>getDefaultMiddleware()
});

export const persistor=persistStore(store)