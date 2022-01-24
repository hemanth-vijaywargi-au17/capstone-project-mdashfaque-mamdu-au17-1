import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const follow = createAsyncThunk(
  "FOLLOW",
  async ({ followee_id, name }, { rejectWithValue }) => {
    let { data } = await axios.post("/user/follow", {
      followee_id,
    });

    if (!data.error) {
      return { id: followee_id, name };
    } else {
      return rejectWithValue(data);
    }
  }
);

export default follow;
