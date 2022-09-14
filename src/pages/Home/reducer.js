import {
  ADD_BANNER,
  ADD_NEW_DAY,
  ADD_FAV_ARTIST,
  ADD_NEW_SONGS,
  ADD_WEEKCHART,
  ADD_TOP100,
} from './actions';

const reducer = (state, action) => {
  let newState = {};
  switch (action.type) {
    case ADD_BANNER:
      newState = { ...state, banner: action.payload };
      return newState;
    case ADD_NEW_DAY:
      newState = { ...state, newDay: action.payload };
      return newState;
    case ADD_FAV_ARTIST:
      newState = { ...state, favoriteArtist: action.payload };
      return newState;
    case ADD_NEW_SONGS:
      newState = { ...state, newSongs: action.payload };
      return newState;
    case ADD_WEEKCHART:
      newState = { ...state, weekChart: action.payload };
      return newState;
    case ADD_TOP100:
      newState = { ...state, top100: action.payload };
      return newState;
    default:
      break;
  }
};

export default reducer;
