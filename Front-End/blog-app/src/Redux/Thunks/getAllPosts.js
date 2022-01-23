import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPosts = createAsyncThunk("GET ALL POSTS", async () => {
  let url = "/app/getAllPosts";
  let { data } = await axios.get(url);
  return data;
});

export default getAllPosts;
