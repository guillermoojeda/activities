import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { getUserInfo } from "../../../databaseMock/actions";

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
})

// must export even if used in the same file.
export const { setUserList } = userSlice.actions

export default userSlice.reducer


// Async functions
export const fetchAllUsers = () => {
  return ((dispatch) => {
    axios.get(GET_USERS_AT_PAGE_1)
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
  })
}