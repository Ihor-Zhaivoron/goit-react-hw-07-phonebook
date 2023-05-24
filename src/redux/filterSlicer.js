import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
    clearFilter(state, action) {
      return '';
    },
  },
});
