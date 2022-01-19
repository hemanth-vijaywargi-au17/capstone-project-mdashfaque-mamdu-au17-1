import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });
  },
});

export default appSlice.reducer;
