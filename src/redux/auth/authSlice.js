
import { createSlice } from '@reduxjs/toolkit';
import {register} from 'redux/auth/authOperations';
import {login,getCurrentUser,logout} from 'redux/auth/authOperations';


const initialState = {
    user: { name: null, email: null },
        token: null,
    isLoaded: false,
        error:null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
 
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoaded = true;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoaded = true;
            state.error = null;
            
        },
        [login.rejected]: (state, action) => {
            state.error = action.payload.message;
            
        },
        
        [logout.fulfilled]: (state, action) => {
            state.user.name = null;
            state.user.email=null;
            state.token = null;
            state.isLoaded = false;
        },
        [getCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoaded = true;
        },
    }
})

// export const { registerUser } = authSlice.actions;
export default authSlice.reducer;