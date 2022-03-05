import axios from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk(
    '/users/register',
    async credentials => {
        const { data } = await axios.post('https://connections-api.herokuapp.com/users/signup', credentials);
        token.set(data.token);
        return data;
    }
);

export const login = createAsyncThunk(
    '/users/login',
    async (credentials,thunkApi) => {
        try {
            const { data } = await axios.post('https://connections-api.herokuapp.com/users/login', credentials);
            token.set(data.token)
            return data;
        }
        catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk(
    '/users/logout',
    async credentials => {
        const { data } = await axios.post('https://connections-api.herokuapp.com/users/logout', credentials);
        token.unset()
        return data;
    }
);

export const getCurrentUser = createAsyncThunk(
    '/users/current',
    async (_, thunkApi) => {
        const state=thunkApi.getState()
        if (state.auth.token === null) {return thunkApi.rejectWithValue()}
        else {
            token.set(state.auth.token)
        const {data} = await axios.get('https://connections-api.herokuapp.com/users/current');
        return data}
       
    }
)