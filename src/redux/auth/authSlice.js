
import { createSlice } from '@reduxjs/toolkit';
import {register} from 'redux/auth/authOperations';
import {login} from 'redux/auth/authOperations';
import {logout} from 'redux/auth/authOperations';


const initialState = {
    user: { name: null, email: null },
        token: null,
        isLoaded: false
}
const authSlice = createSlice({
    name:'auth',
    initialState,
 
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
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
    }
})

// export const { registerUser } = authSlice.actions;
export default authSlice.reducer;