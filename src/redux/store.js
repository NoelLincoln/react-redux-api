import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/user/UserSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
