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
    editUserName: (state, action) => {
      state.userName = action.payload;
    },
    deleteUserDatas:(state, action) =>{
      state.email = ""
      state.firstName = ""
      state.lastName = ""
      state.userName = ""
    },
  },
});

export const { addUserDatas, editUserName, deleteUserDatas } = profileSlice.actions;