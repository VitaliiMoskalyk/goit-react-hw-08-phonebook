import axios from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
    '/contacts',
    async credentials => {
        const { data } = await axios.get('https://connections-api.herokuapp.com/contacts', credentials)
            
        
        return data;
    }
);

export const postContact = createAsyncThunk(
    '/contacts',
    async credentials => {
        try {
            const {data} = await axios.post('https://connections-api.herokuapp.com/contacts',credentials);
        
        return data;
        }
        catch {
            
        }
        
    }
)

// export const logout = createAsyncThunk(
//     '/users/logout',
//     async credentials => {
//         const { data } = await axios.post('https://connections-api.herokuapp.com/users/logout', credentials);
//         token.unset()
//         return data;
//     }
// );
