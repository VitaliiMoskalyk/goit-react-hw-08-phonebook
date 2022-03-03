import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './filter/filterReducer';
import userReducer from './auth/authSlice'
import contactReduser from 'redux/contacts/contactsSlice'

export const store = configureStore({
    reducer: {
        search: contactsReducer,
        auth:userReducer,
        contacts:contactReduser,
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware()
});

