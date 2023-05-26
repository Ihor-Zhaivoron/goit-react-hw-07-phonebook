import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://646e57ee9c677e23218b8c61.mockapi.io/contacts/';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      console.log('data', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      console.log({ name, number });
      const response = await axios.post('contacts', { name, number });
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
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log('delete', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
