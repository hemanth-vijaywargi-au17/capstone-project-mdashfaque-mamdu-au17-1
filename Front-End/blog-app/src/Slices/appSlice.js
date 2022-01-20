import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteArticle } from "./userSlice";

export const getAllPosts = createAsyncThunk("app/getAllPosts", async () => {
  let url = "/app/getAllPosts";
  let { data } = await axios.get(url);
  return data;
});

const appSlice = createSlice({
  name: "app",
  initialState: {
    allPosts: [],
  },
  reducers: {
    removeArticle : (state, action) => {
      state.allPosts = state.allPosts.filter(
        (obj) => obj._id !== action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });
  },
});

export const { removeArticle } = appSlice.actions
export default appSlice.reducer;
