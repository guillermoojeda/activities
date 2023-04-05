import { configureStore } from "@reduxjs/toolkit";
//reducer
import user from './slices/user';

export default configureStore({
  reducer: {
    user,
  }
})