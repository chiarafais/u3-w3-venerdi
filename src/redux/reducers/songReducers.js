import { GET_SONGS, GET_SONGS_HIPHOP, GET_SONGS_POP } from "../actions";

const initialState = {
  results: [],
  pop: [],
  hiphop: [],
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
    default:
      return state;
  }
};

export default songReducer;
