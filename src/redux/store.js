import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './filter/filterReducer';
import userReducer from './auth/authSlice'
import { contactsApi } from 'fetch/mockApi/mockApi';

export const store = configureStore({
    reducer: {
        filter: contactsReducer,
        auth:userReducer,
        [contactsApi.reducerPath]:contactsApi.reducer,
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(contactsApi.middleware)
});

