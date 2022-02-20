import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/reducer';
import { contactsApi } from 'fetch/mockApi/mockApi';

export const store = configureStore({
    reducer: {
        filter: contactsReducer,
        [contactsApi.reducerPath]:contactsApi.reducer,
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(contactsApi.middleware)
});

