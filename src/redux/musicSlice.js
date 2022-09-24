import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    playlistInQueue: [],
    currentIndex: 0,
    currentSong: null,
    srcCurrentSong: null,
    nextSong: null,
    prevSong: null,
  },
  reducers: {
    setPlaylistInQueue: (state, action) => {
      state.playlistInQueue = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentIndex = action.payload;
      state.currentSong = state.playlistInQueue[state.currentIndex];
    },
    setSrcCurrentSong: (state, action) => {
      state.srcCurrentSong = action.payload;
    },
    nextSong: (state) => {
      state.currentIndex++;
      state.currentSong = state.playlistInQueue[state.currentIndex];
    },
    prevSong: (state) => {
      state.currentIndex--;
      state.currentSong = state.playlistInQueue[state.currentIndex];
    },
  },
});

export { musicSlice };
export const { setCurrentSong, setPlaylistInQueue, nextSong, prevSong, setSrcCurrentSong } =
  musicSlice.actions;
export default musicSlice.reducer;
