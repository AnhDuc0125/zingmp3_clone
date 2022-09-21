import { configureStore } from '@reduxjs/toolkit';
import radioReducer from './radioSlice';

const store = configureStore({
  reducer: {
    radio: radioReducer,
  },
});

export default store;
