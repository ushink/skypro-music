import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import trackSlice from "./slices/trackSlice";
import AuthReducer from "./slices/authSlice";
import { tracksApi } from "../services/trackQuery";

export const store = configureStore({
  reducer: {
    audioplayer: trackSlice,
    auth: AuthReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddeleware) =>
    getDefaultMiddeleware().concat(tracksApi.middleware),
});
