import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Votre état initial
};

const slice = createSlice({
  name: 'yourSliceName',
  initialState,
  reducers: {
    // Vos reducers
  },
});

export const { yourAction } = slice.actions;

export default slice.reducer;