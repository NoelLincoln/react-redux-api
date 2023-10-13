import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
