import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filters',
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
