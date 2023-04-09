import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';
import { getActivities } from "../../../databaseMock/actions";
// import { GET_USERS_AT_PAGE_1 }

export const userSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: []
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    clearActivitiesList: (state) => {
      state.activities = [];
    }
  }
})

export const { setActivities, clearActivitiesList } = userSlice.actions

export default userSlice.reducer


// Mocked Async (not really async) function
export const fetchActivities = (userEmail) => {
  return ((dispatch) => {
    // This is what is it should be if this was really a promise:
    // getActivities(userEmail)
    // .then((response) => {
    //   dispatch(setActivities(response.data.data));
    // })
    // .catch((error) => console.log(error));
    const newActivities = getActivities(userEmail).activities;
    dispatch(setActivities(newActivities));
  })
}

export const clearActivities = () => {
  return ((dispatch) => {
    dispatch(clearActivitiesList());
  })
}
