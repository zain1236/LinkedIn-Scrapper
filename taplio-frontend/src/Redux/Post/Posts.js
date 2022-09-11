import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viralPost: [],
  isLoading: false,
  error: false,
  temporary: {},
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return { ...action.payload, ...state.temporary };
    },

    addTemporary: (state, action) => {
      return { ...state, temporary: action.payload };
    },
  },
});

export const PostAction = PostSlice.actions;
export default PostSlice.reducer;
