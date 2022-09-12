import { ADD_BANNER, ADD_NEW_DAY, ADD_FAV_ARTIST } from './actions';

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
    default:
      break;
  }
};

export default reducer;
