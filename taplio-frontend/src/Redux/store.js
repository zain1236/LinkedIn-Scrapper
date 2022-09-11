import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice";
import PostReducer from "./Post/Posts";
const store = configureStore({
  reducer: { User: UserReducer, Post: PostReducer },
});

export default store;
