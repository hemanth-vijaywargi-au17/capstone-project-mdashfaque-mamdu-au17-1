import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addComment = createAsyncThunk(
  "ADD COMMENT",
  async (commentObj, { rejectWithValue }) => {
    let { data } = await axios.post("/user/comment/add", {
      post_id: commentObj.post_id,
      comment: commentObj,
    });
    if (!data.error) {
      return { commentObj: data.commentObj, post_id: data.commentObj.post_id };
    } else {
      return rejectWithValue(data);
    }
  }
);

export default addComment;
