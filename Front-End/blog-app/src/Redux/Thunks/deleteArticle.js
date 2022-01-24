import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const deleteArticle = createAsyncThunk(
  "DELETE ARTICLE",
  async (post_id, { rejectWithValue }) => {
    const toastId = toast.loading("Deleting...");
    let { data } = await axios.post("/user/article/delete", {
      post_id: post_id,
    });
    if (!data.error) {
      data.post_id = post_id;
      return { data, toastId };
    } else {
      return rejectWithValue({ data, toastId });
    }
  }
);

export default deleteArticle;
