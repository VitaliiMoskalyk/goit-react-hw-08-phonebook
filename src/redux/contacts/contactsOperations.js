import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
    '/contacts/get',
    async credentials => {
       try {
            const {data} = await axios.get('https://connections-api.herokuapp.com/contacts',credentials);
        return data;
        }
        catch {  
        }
    }
);

export const postContact = createAsyncThunk(
    '/contacts/post',
    async credentials => {
        try {
            const {data} = await axios.post('https://connections-api.herokuapp.com/contacts',credentials);
        return data;
        }
        catch { 
        }  
    }
)

export const deleteContact = createAsyncThunk(
    '/contacts/delete',
    async contactId => {
        try {
            const { data } = await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactId}`, contactId);
        return data;
        }
        catch {
            
        }
    }
);


