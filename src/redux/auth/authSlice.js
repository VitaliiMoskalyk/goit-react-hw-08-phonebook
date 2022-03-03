
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    async credentials=> {
        const {data} = await axios.post('https://connections-api.herokuapp.com/users/login',credentials);
        token.set(data.token)
        return data;
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

const initialState = {
    user: { name: null, email: null },
        token: null,
        isLoaded: false
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    // reducers: {
    //     registerUser:(state, action)=> {
    //         state.user = action.payload;
            
    //     }
    // },
    extraReducers: {
        // [authFetch.pending]: (state, action) => {},
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            // state.isLoaded = true;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoaded = true;
        },
        [logout.fulfilled]: (state, action) => {
            state.user.name = null;
            state.user.email=null;
            state.token = null;
            state.isLoaded = false;
        },
        // [authFetch.rejected]:(state,action)=>{},
    }
})

// export const { registerUser } = authSlice.actions;
export default authSlice.reducer;