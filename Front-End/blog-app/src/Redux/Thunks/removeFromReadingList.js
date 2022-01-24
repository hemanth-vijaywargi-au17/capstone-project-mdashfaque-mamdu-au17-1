import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeFromReadingList = createAsyncThunk(
  "REMOVE FROM READING LIST",
  async (post_id, { rejectWithValue }) => {
    let { data } = await axios.post("/user/article/readingList/remove", {
      post_id: post_id,
    });

    if (!data.error) {
      return post_id;
    } else {
      return rejectWithValue(data);
    }
  }
);

export default removeFromReadingList;
