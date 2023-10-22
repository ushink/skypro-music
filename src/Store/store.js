import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./reducers/track";
// import trackSlice from "./action/creators/track.js";

export const store = configureStore({
  reducer: {
    audioplayer: trackReducer,
  },
});
