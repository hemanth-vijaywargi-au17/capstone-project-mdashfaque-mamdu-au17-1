import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
    isLoading: false,
    error: "",
  },
  reducers: {
    login: (state, action) => {
      const provider = action.payload;
      window.open(`http://localhost:5000/auth/${provider}`, "_self");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Thunks.logOut.fulfilled, (state, action) => {
      state.user = {
        name: null,
        email: null,
        profilePicURL: null,
        createdPosts: [],
        readingList: [],
        likedPosts: [],
        followers: [],
        following: [],
        _id: null,
      };
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

    builder.addCase(Thunks.getUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
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
      Thunks.postArticle.fulfilled,
      (state, { payload: { data, toastId } }) => {
        state.user.createdPosts.push(data._id);
        state.allPosts[data._id] = data;
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
      Thunks.postArticle.rejected,
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
      Thunks.deleteArticle.fulfilled,
      (state, { payload: { data, toastId } }) => {
        state.user.createdPosts = state.user.createdPosts.filter(
          (obj) => obj._id !== data.post_id
        );
        delete state.allPosts[data.post_id];
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
      Thunks.deleteArticle.rejected,
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

    builder.addCase(Thunks.getPost.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(Thunks.getPost.fulfilled, (state, action) => {
      state.currentPost = action.payload;
      state.isLoading = false;
      state.error = "";
      state.allPosts[action.payload._id] = action.payload;
    });
    
    builder.addCase(Thunks.getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        "Sorry, this article does not exist or It was removed by the author.";
    });
  },
});

export const actions = {
  ...appSlice.actions,
  ...Thunks,
};

const appReducer = appSlice.reducer;

export default appReducer;
