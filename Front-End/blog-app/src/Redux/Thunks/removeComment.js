import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeComment = createAsyncThunk(
  "REMOVE COMMENT",
  async ({ post_id, comment_id }, { rejectWithValue }) => {
    let { data } = await axios.post("/user/comment/remove", {
      post_id: post_id,
      comment_id: comment_id,
    });
    if (!data.error) {
      return { post_id, comment_id };
    } else {
      return rejectWithValue(data);
    }
  }
);

export default removeComment;
