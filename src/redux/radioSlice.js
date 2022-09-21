import { createSlice } from '@reduxjs/toolkit';

const radioSlice = createSlice({
  name: 'radio',
  initialState: {
    livestream: {},
    podcast: {},
    banner: {},
    category: {},
    newProgram: {},
  },
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export { radioSlice };
export const { update } = radioSlice.actions;
export default radioSlice.reducer;
