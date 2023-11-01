import { createSlice } from "@reduxjs/toolkit";
const AUTH_KEY = "auth";

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
  } catch (error) {
    console.log(error);
    return null;
  }
}

const initialState = {
  refreshToken: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",

  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    AuthReducer(state, action) {
      const payload = action.payload ?? initialState;

      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.accessToken;

      localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    },
  },
});

export const { AuthReducer } = authSlice.actions;

export default authSlice.reducer;
