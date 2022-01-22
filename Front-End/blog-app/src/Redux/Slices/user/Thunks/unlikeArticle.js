import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const unlikeArticle = createAsyncThunk(
  "user/article/removeLike",
  async (post_id, { rejectWithValue }) => {
    let { data } = await axios.post("/user/article/removeLike", {
      post_id: post_id,
    });
    console.log(data);
    if (!data.error) {
      return post_id;
    } else {
      return rejectWithValue(data);
    }
  }
);

export default unlikeArticle;
