import { createSlice } from "@reduxjs/toolkit";
import ExtraReducers from "./ExtraReducers";
import Thunks from "./Thunks";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: {
      name: null,
      email: null,
      profilePicURL: null,
      createdPosts: [],
      readingList: [],
      likedPosts: [],
      followers: [],
      following: [],
      _id: null,
    },
    allPosts: {},
    allUsers: {},
    isLoading: false,
    error: false,
  },
  reducers: {
    login: (state, action) => {
      const provider = action.payload;
      window.open(`/auth/${provider}`, "_self");
    },
    clearError: (state, action) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Thunks.logOut.fulfilled, ExtraReducers.logOut.fulfilled);

    builder.addCase(Thunks.getUser.fulfilled, ExtraReducers.getUser.fulfilled);

    builder.addCase(
      Thunks.postArticle.fulfilled,
      ExtraReducers.postArticle.fulfilled
    );

    builder.addCase(
      Thunks.postArticle.rejected,
      ExtraReducers.postArticle.rejected
    );

    builder.addCase(
      Thunks.deleteArticle.fulfilled,
      ExtraReducers.deleteArticle.fulfilled
    );

    builder.addCase(
      Thunks.deleteArticle.rejected,
      ExtraReducers.deleteArticle.rejected
    );

    builder.addCase(Thunks.likeArticle.fulfilled, (state, action) => {
      state.user.likedPosts.push(action.payload);
      state.allPosts[action.payload].likes += 1;
    });

    builder.addCase(Thunks.unlikeArticle.fulfilled, (state, action) => {
      state.user.likedPosts = state.user.likedPosts.filter(
        (post_id) => post_id !== action.payload
      );
      state.allPosts[action.payload].likes -= 1;
    });

    builder.addCase(Thunks.getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload.reduce((prev, curr) => {
        let newObj = { ...prev };
        newObj[curr._id] = curr;
        return newObj;
      }, state.allPosts);
    });

    builder.addCase(Thunks.getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload.reduce((prev, curr) => {
        let newObj = { ...prev };
        newObj[curr._id] = curr;
        return newObj;
      }, state.allUsers);
    });

    builder.addCase(Thunks.getPost.pending, ExtraReducers.getPost.pending);
    builder.addCase(Thunks.getPost.fulfilled, ExtraReducers.getPost.fulfilled);
    builder.addCase(Thunks.getPost.rejected, ExtraReducers.getPost.rejected);

    builder.addCase(
      Thunks.addToReadingList.fulfilled,
      ExtraReducers.addToReadingList.fulfilled
    );
    builder.addCase(
      Thunks.addToReadingList.rejected,
      ExtraReducers.addToReadingList.rejected
    );

    builder.addCase(
      Thunks.removeFromReadingList.fulfilled,
      ExtraReducers.removeFromReadingList.fulfilled
    );
    builder.addCase(
      Thunks.removeFromReadingList.rejected,
      ExtraReducers.removeFromReadingList.rejected
    );

    builder.addCase(Thunks.follow.fulfilled, ExtraReducers.follow.fulfilled);
    builder.addCase(
      Thunks.unfollow.fulfilled,
      ExtraReducers.unfollow.fulfilled
    );

    builder.addCase(Thunks.follow.rejected, ExtraReducers.follow.rejected);
    builder.addCase(Thunks.unfollow.rejected, ExtraReducers.unfollow.rejected);

    builder.addCase(Thunks.addComment.fulfilled, ExtraReducers.addComment.fulfilled);
    builder.addCase(Thunks.addComment.rejected, ExtraReducers.addComment.rejected);

    builder.addCase(Thunks.removeComment.fulfilled, ExtraReducers.removeComment.fulfilled);
    builder.addCase(Thunks.removeComment.rejected, ExtraReducers.removeComment.rejected);

  },
});

export const actions = {
  ...appSlice.actions,
  ...Thunks,
};

const appReducer = appSlice.reducer;

export default appReducer;
