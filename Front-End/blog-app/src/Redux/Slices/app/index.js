import { createSlice } from "@reduxjs/toolkit";
import appThunks from "./Thunks";

const appSlice = createSlice({
  name: "app",
  initialState: {
    allPosts: [],
    currentPost: null,
    isLoading: false,
    error: "",
  },
  reducers: {
    removeArticle: (state, action) => {
      state.allPosts = state.allPosts.filter(
        (obj) => obj._id !== action.payload
      );
    },
    clearSate: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.currentPost = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appThunks.getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });
    builder.addCase(appThunks.getPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(appThunks.getPost.fulfilled, (state, action) => {
      state.currentPost = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(appThunks.getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        "Sorry, this article does not exist or It was removed by the author.";
    });
  },
});

export const appActions = {
  ...appSlice.actions,
  ...appThunks,
};

const appReducer = appSlice.reducer;

export default appReducer;
