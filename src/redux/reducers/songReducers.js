import {
  ADD_TO_FAVOURITES,
  GET_SONGS,
  GET_SONGS_HIPHOP,
  GET_SONGS_POP,
  PLAY_SONG,
  REMOVE_FROM_FAVOURITES,
} from "../actions";

const initialState = {
  results: [],
  pop: [],
  hiphop: [],
  song: {},
  content: [],
};

const songReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_SONGS_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_SONGS_HIPHOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    case PLAY_SONG:
      return {
        ...state,
        song: action.payload,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default songReducer;
