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
                state.isFetching = true;  
        },
        [getContacts.fulfilled]: (state, action) => {
            state.contacts = action.payload;
            state.isFetching = true;
            
        },
        [postContact.fulfilled]: (state, action) => {
            state.contacts = action.payload;
            state.isFetching = false
        },
        // [logout.fulfilled]: (state, action) => {
        //     state.user.name = null;
        //     state.user.email=null;
        //     state.token = null;
        //     state.isLoaded = false;
        // },
    }
})

// export const { registerUser } = authSlice.actions;
export default contactSlice.reducer;