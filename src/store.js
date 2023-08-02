import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './InputSlice';

export default configureStore({
  reducer: {
    input: inputReducer
  }
});
