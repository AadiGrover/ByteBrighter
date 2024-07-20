import { createSlice } from "@reduxjs/toolkit";


// IF TOKEN IS NULL THEN WE SHOW BOTH LOGIN AND SIGN-UP AT TOP RIGHT CORNER IF TOKEN IS NOT NULL THEN ONLY SIGN-UP
const initialState = {
  signupData: null,
  loading: false,
  // as if we close our tab the local storage keeps the data 
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;