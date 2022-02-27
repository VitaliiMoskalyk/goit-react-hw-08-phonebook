import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/reducer';
import registerUser from './auth/authSlice'
import { contactsApi } from 'fetch/mockApi/mockApi';

export const store = configureStore({
    reducer: {
        filter: contactsReducer,
        auth:registerUser,
        [contactsApi.reducerPath]:contactsApi.reducer,
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(contactsApi.middleware)
});

