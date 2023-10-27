import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    refreshToken: null,
    accessToken: null,
  },
  reducers: {
    AuthReducer(state, action) {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
  },
});

export const { AuthReducer } = authSlice.actions;

export default authSlice.reducer;
