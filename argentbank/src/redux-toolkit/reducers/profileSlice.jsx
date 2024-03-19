import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  profile: {
    Username: "",
    Password: "",
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload.profile;
    },
  },
});

export const { setProfile } = profileSlice.actions;