import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { GET_USER_INFO } from "../../../URLs/urls";


export const userSlice = createSlice({
  name: 'users',
  initialState: {
    isSessionActive: false,
    name:'',
    lastname: '',
    email: '',
    password: '',
    age: 0,
    activities: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.list = action.payload;
    }
  }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer

// Async functions
export const fetchUserInfo = () => {
  return ((dispatch) => {
    axios.get(GET_USERS_AT_PAGE_1)
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error)); // console.log for demonstration purposes only
  })
}
