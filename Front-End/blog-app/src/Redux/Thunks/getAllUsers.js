import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllUsers = createAsyncThunk("GET ALL USERS", async () => {
  let url = "/app/getAllUsers";
  let { data } = await axios.get(url);
  return data;
});

export default getAllUsers;
