import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: []
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    add: state => {
      state.value = [['', null], ...state.value];
    },
    save: (state, action) => {
      state.value = [...state.value, action.payload].slice(1);
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((el, i) => i !== action.payload);
    }
  }
});

export const { add, save, deleteItem } = inputSlice.actions;

export default inputSlice.reducer;
