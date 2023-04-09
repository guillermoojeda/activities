import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../../databaseMock/actions";

const initialState = {
  name:'',
  lastname: '',
  email: '',
  age: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { name, lastname, email, age } = action.payload;
      state.name = name;
      state.lastname = lastname;
      state.email = email;
      state.age = age;
    },
    resetUserSlice: (state) => {
      state.name = '';
      state.lastname = '';
      state.email = '';
      state.age = 0;
    }
  }
})

export const { setUserInfo, resetUserSlice } = userSlice.actions

export default userSlice.reducer

// Mocked Async (not really async) functions (mocked database call)
export const fetchUserInfo = () => {
  return ((dispatch) => {
    getUserInfo()
    .then((response) => {
      dispatch(setUserInfo(response.data.data));
    })
    .catch((error) => console.log(error)); // console.log for demonstration purposes only
  })
}

export const clearUserInfo = () => {
  return ((dispatch) => {
    dispatch(resetUserSlice());
  })
}
