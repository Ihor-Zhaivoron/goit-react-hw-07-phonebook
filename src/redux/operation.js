import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseUrl = 'https://63c3aa08a9085635752af165.mockapi.io/api/';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      console.log({ name, phone });
      const response = await axios.post('contacts', { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contcts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete('/contacts/${contactId}');
      console.log('delete', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
