import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  token: "",
  isLoggedin: false,
  error: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    register: (state, action) => {
      return action.payload;
    },
  },
});

export const UserActions = UserSlice.actions;

export default UserSlice.reducer;
