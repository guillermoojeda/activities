import { configureStore } from "@reduxjs/toolkit";
//reducer
import user from './slices/user';
import activities from "./slices/activities";

export default configureStore({
  reducer: {
    user,
    activities,
  }
})