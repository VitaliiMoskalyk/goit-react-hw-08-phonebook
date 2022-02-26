import { createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions';

const initialState = {
    user: {name:null,email:null,password:null},
    token: null,
    isLoggedin:false,
    
}
export const authReducer = createReducer('', {
    [actions.registerUser]: (state=initialState, action) => state
});