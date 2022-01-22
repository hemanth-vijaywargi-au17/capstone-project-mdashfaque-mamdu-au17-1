import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUser = createAsyncThunk("user/get", async (_, { rejectWithValue }) => {
  let url = "/auth/login/success";
  let options = { credentials: "include" };
  let { data } = await axios.get(url, options);
  if (data.error) {
    return rejectWithValue(data);
  } else {
    return data;
  }
});

export default getUser;
