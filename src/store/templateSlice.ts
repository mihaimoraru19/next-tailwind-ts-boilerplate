import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: 'template',
  initialState: {
    developer: true,
  },
  reducers: {
    makeDeveloper: (state) => {
      state.developer = true;
    },
    unmakeDeveloper: (state) => {
      state.developer = false;
    },
  },
});

export default templateSlice;

export const templateAction = templateSlice.actions;
