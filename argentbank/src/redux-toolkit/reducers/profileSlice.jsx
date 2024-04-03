import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  profile: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addUserDatas:(state, action) =>{
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.userName = action.payload.userName
    },
    setProfile: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { addUserDatas, setProfile } = profileSlice.actions;