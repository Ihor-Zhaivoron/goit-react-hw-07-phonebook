import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    // -----fetchAllContacts------
    [fetchAllContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchAllContacts.fullfilled](state, action) {
      state.isLoading = false;
      state.erro = null;
      state.items = action.payload;
    },
    [fetchAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //--------addContact--------
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fullfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    //----------deleteContact--------
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fullfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(elem => elem.id !== action.payload.id);
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
