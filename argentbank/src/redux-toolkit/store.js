import { configureStore } from '@reduxjs/toolkit';
import {authSlice} from './reducers/authSlice'
import {profileSlice} from './reducers/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
  }
});

export default store;