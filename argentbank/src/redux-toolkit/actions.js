import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const slice = createSlice({
  name: 'yourSliceName',
  initialState,
  reducers: {

  },
});

export const { yourAction } = slice.actions;

export default slice.reducer;