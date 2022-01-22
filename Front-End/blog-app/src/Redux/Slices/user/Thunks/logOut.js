import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const logOut = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    let url = "/auth/logout";
    let { data } = await axios.get(url);
    if (data.error) {
      return rejectWithValue(data);
    } else {
      return data;
    }
  }
);

export default logOut;
