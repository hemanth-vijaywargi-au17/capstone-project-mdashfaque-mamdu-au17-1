import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userThunks from "./Thunks";

const userSlice = createSlice({
  name: "user",
  initialState: {
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
  reducers: {
    login: (state, action) => {
      const provider = action.payload;
      window.open(`http://localhost:5000/auth/${provider}`, "_self");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunks.logOut.fulfilled, (state, action) => {
      state.name = null;
      state.email = null;
      state.profilePicURL = null;
      state.createdPosts = [];
      state.readingList = [];
      state.likedPosts = [];
      state.followers = [];
      state.following = [];
      state._id = null;
      toast.info("You Signed Out!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
    builder.addCase(userThunks.getUser.fulfilled, (state, action) => {
      const {
        name,
        email,
        profilePicURL,
        createdPosts,
        readingList,
        likedPosts,
        followers,
        following,
        _id,
      } = action.payload.user;
      state.name = name;
      state.email = email;
      state.profilePicURL = profilePicURL;
      state.createdPosts = createdPosts;
      state.readingList = readingList;
      state.likedPosts = likedPosts;
      state.followers = followers;
      state.following = following;
      state._id = _id;
      toast.success("Sign In Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
    builder.addCase(
      userThunks.postArticle.fulfilled,
      (state, { payload: { data, toastId } }) => {
        state.createdPosts.push(data);
        toast.update(toastId, {
          render: "Posted Successfully!",
          type: "success",
          isLoading: false,
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    );
    builder.addCase(
      userThunks.postArticle.rejected,
      (state, { payload: { toastId } }) => {
        toast.update(toastId, {
          render: "Posting Failed!",
          type: "error",
          isLoading: false,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    );
    builder.addCase(
      userThunks.deleteArticle.fulfilled,
      (state, { payload: { data, toastId } }) => {
        state.createdPosts = state.createdPosts.filter(
          (obj) => obj._id !== data.post_id
        );
        toast.update(toastId, {
          render: "Post Deleted Successfully!",
          type: "success",
          isLoading: false,
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    );
    builder.addCase(
      userThunks.deleteArticle.rejected,
      (state, { payload: { toastId } }) => {
        toast.update(toastId, {
          render: "Operation Failed!",
          type: "error",
          isLoading: false,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    );
    builder.addCase(userThunks.likeArticle.fulfilled, (state, action) => {
      state.likedPosts.push(action.payload);
    });
    builder.addCase(userThunks.unlikeArticle.fulfilled, (state, action) => {
      state.likedPosts = state.likedPosts.filter(
        (post_id) => post_id !== action.payload
      );
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  ...userThunks,
};

const userReducer = userSlice.reducer;

export default userReducer;
