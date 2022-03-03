import { createReducer } from '@reduxjs/toolkit';
import * as actions from './filterAction';

export const contactsReducer = createReducer('', {
    [actions.filterContacts]: (state, action) => state = action.payload
});