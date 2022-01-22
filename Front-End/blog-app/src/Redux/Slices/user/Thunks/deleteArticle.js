import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { appActions } from "../../app";

export const deleteArticle = createAsyncThunk(
  "user/article/delete",
  async (post_id, { dispatch, rejectWithValue }) => {
    const toastId = toast.loading("Deleting...");
    let { data } = await axios.post("/user/article/delete", {
      post_id: post_id,
    });
    if (!data.error) {
      dispatch(appActions.removeArticle(post_id));
      data.post_id = post_id;
      return { data, toastId };
    } else {
      return rejectWithValue({ data, toastId });
    }
  }
);

export default deleteArticle;
