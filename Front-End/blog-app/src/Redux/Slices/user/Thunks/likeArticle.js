import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const likeArticle = createAsyncThunk(
  "user/article/like",
  async (post_id, { rejectWithValue }) => {
    let { data } = await axios.post("/user/article/like", {
      post_id: post_id,
    });

    if (!data.error) {
      return post_id;
    } else {
      return rejectWithValue(data);
    }
  }
);

export default likeArticle;
