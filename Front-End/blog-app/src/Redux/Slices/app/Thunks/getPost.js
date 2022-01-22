import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPost = createAsyncThunk(
  "app/article/get",
  async (post_id, { getState, rejectWithValue }) => {
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

export default getPost;
