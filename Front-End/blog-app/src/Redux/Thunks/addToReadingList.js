import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addToReadingList = createAsyncThunk(
  "ADD TO READING LIST",
  async (post_id, { rejectWithValue }) => {
    let { data } = await axios.post("/user/article/readingList/add", {
      post_id: post_id,
    });

    if (!data.error) {
      return post_id;
    } else {
      return rejectWithValue(data);
    }
  }
);

export default addToReadingList;
