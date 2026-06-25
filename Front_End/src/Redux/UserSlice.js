import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    roadmaps: [],
    isLoading: false,
    isAuthChecked: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.roadmaps = [];
    },
    setRoadmaps: (state, action) => {
      state.roadmaps = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAuthChecked: (state) => {
      state.isAuthChecked = true;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setRoadmaps,
  setLoading,
  setAuthChecked,
  updateUser,
} = userSlice.actions;
export default userSlice.reducer;
