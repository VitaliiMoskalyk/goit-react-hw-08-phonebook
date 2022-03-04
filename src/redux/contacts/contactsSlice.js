import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contactsOperations';
import {postContact} from './contactsOperations'

const initialState = {
    contacts: [],
    isFetching: false,
    error:null,
}
const contactSlice = createSlice({
    name:'contacts',
    initialState,
 
    extraReducers: {
        [getContacts.pending]: (state, action) => {
            // state.contacts=(action.payload);
                state.isFetching = true;  
        },
        [getContacts.fulfilled]: (state, action) => {
            state.contacts=(action.payload);
            state.isFetching = false;
            
        },
        [postContact.fulfilled]: (state, action) => {
            // state.contacts = action.payload;
            
            state.isFetching = false
        },
    }
})

// export const { registerUser } = authSlice.actions;
export default contactSlice.reducer;