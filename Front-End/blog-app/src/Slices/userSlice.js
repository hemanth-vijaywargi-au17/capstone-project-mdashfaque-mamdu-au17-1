import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/get", async () => {
  let url = "/auth/login/success";
  let options = { credentials: "include" };
  let { data } = await axios.get(url, options);
  return data;
});

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
      if (!action.payload.error) {
        const {
          name,
          email,
          profilePicURL,
          createdPosts,
          readingList,
          likedPosts,
          followers,
          following,
        } = action.payload.user;
        state.name = name;
        state.email = email;
        state.profilePicURL = profilePicURL;
        state.createdPosts = createdPosts;
        state.readingList = readingList;
        state.likedPosts = likedPosts;
        state.followers = followers;
        state.following = following;
      }
    });
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
