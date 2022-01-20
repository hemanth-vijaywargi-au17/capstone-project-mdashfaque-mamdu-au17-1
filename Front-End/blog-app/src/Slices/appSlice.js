import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk("app/getAllPosts", async () => {
  let url = "/app/getAllPosts";
  let { data } = await axios.get(url);
  return data;
});

export const getPost = createAsyncThunk(
  "app/article/get",
  async (post_id, { getState, dispatch, rejectWithValue }) => {
    let article = getState().app.allPosts.find((post) => post._id === post_id);
    if (article) {
      return article;
    }
    let { data } = await axios.post("/app/getPost", {
      post_id: post_id,
    });
    if (data.error) {
      return rejectWithValue(data);
    } else {
      return data;
    }
  }
);

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
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.currentPost = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        "Sorry, this article does not exist or It was removed by the author.";
    });
  },
});

export const { removeArticle } = appSlice.actions;
export default appSlice.reducer;
