import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const unfollow = createAsyncThunk(
  "UNFOLLOW",
  async ({followee_id,name}, { rejectWithValue }) => {
    let { data } = await axios.post("/user/unfollow", {
      followee_id,
    });

    if (!data.error) {
      return { id: followee_id, name };
    } else {
      return rejectWithValue(data);
    }
  }
);

export default unfollow;
