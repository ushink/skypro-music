import { configureStore } from "@reduxjs/toolkit";
// import trackReducer from "./reducers/track";
import trackSlice from "./slices/trackSlice";

export const store = configureStore({
  reducer: {
    audioplayer: trackSlice,
  },
});
