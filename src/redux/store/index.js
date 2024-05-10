import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducers from "../reducers/songReducers";

const bigReducer = combineReducers({
  song: songReducers,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
