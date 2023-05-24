import { configureStore } from '@reduxjs/toolkit';
import { filterSlicer } from './filterSlicer';
import { contactsReducer } from './slicerApi';

export const store = configureStore({
  reducer: {
    filters: filterSlicer.reducer,
    contacts: contactsReducer,
  },
});
