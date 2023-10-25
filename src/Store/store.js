import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import trackSlice from "./slices/trackSlice";
import { tracksApi } from "../services/trackQuery";

export const store = configureStore({
  reducer: {
    audioplayer: trackSlice,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddeleware) =>
    getDefaultMiddeleware().concat(tracksApi.middleware),
});
