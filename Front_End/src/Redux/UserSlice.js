import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    roadmaps: [],
    isLoading: false,
    isAuthChecked: false,
    role: "user",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.role = action.payload?.role || 'user';
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
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
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setRoadmaps,
  setLoading,
  setAuthChecked,
  setUser,
} = userSlice.actions;
export default userSlice.reducer;
