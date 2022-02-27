
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const register = createAsyncThunk(
    '/users/register',
    async credentials => {
        const { data } = await axios.post('https://connections-api.herokuapp.com/users/signup', credentials);
        console.log(credentials, data);
        return data;
    }
);

export const login = createAsyncThunk(
    '/users/login',
    async credentials=> {
        const {data} = await axios.post('https://connections-api.herokuapp.com/users/login',credentials);
        console.log(credentials,data);
        return data;
    }
)

const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoaded: false
    },
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
            state.isLoaded = true;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoaded = true;
        },
        // [authFetch.rejected]:(state,action)=>{},
    }
})

// export const { registerUser } = authSlice.actions;
export default authSlice.reducer;