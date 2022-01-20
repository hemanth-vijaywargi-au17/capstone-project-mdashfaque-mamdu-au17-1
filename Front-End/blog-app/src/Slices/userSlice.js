import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cloudinaryUpload from "../Utils/cloudinaryUpload";
import { removeArticle } from "./appSlice";

export const getUser = createAsyncThunk(
  "user/get",
  async (_, { rejectWithValue }) => {
    let url = "/auth/login/success";
    let options = { credentials: "include" };
    let { data } = await axios.get(url, options);
    if (data.error) {
      return rejectWithValue(data);
    } else {
      return data;
    }
  }
);

export const postArticle = createAsyncThunk(
  "user/article/post",
  async (articleObj, { getState }) => {
    const { file, title, summary, articleBody, category } = articleObj;
    const _id = getState().user._id;
    const postObj = {
      title: title,
      summary: summary,
      body: articleBody,
      author: _id,
      likes: 0,
      thumbnailURL: "",
      tags: category.length !== 0 ? category.split(",") : [],
      comments: [],
    };

    if (file) {
      const { secure_url } = await cloudinaryUpload(file);
      postObj.thumbnailURL = secure_url;
    }

    let { data } = await axios.post("/user/article/post", postObj);
    return data;
  }
);

export const deleteArticle = createAsyncThunk(
  "user/article/delete",
  async (post_id, { getState, dispatch, rejectWithValue }) => {
    const user_id = getState().user._id;
    let { data } = await axios.post("/user/article/delete", {
      post_id: post_id,
      user_id: user_id,
    });

    if (!data.error) {
      dispatch(removeArticle(post_id));
      data.post_id = post_id;
      return data;
    } else {
      return rejectWithValue(data);
    }
  }
);

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
    logout: () => {
      window.open("http://localhost:5000/auth/logout", "_self");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
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
    });
    builder.addCase(postArticle.fulfilled, (state, action) => {
      state.createdPosts.push(action.payload);
    });
    builder.addCase(deleteArticle.fulfilled, (state, action) => {
      state.createdPosts = state.createdPosts.filter(
        (obj) => obj._id !== action.payload.post_id
      );
    });
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
