import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (channelId) => {
    return await axios
      .get(`http://localhost:8000/api/posts/${channelId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data.result);
  }
);
export const postPosts = createAsyncThunk("posts/postPosts", async (post) => {
  const json = JSON.stringify(post);
  return await axios
    .post("http://localhost:8000/api/posts", json, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data.result);
});

const initialState = {
  posts: [],
  status: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [postPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [postPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = [...state.posts, action.payload];
    },
    [postPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, addPosts, deletePosts } = postSlice.actions;

export default postSlice.reducer;
