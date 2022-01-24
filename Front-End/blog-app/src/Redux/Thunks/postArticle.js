import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import cloudinaryUpload from "../../Utils/cloudinaryUpload";

const postArticle = createAsyncThunk(
  "POST ARTICLE",
  async (articleObj, { getState, rejectWithValue }) => {
    const toastId = toast.loading("Posting...");
    const { file, title, summary, articleBody, category } = articleObj;
    const _id = getState().app.user._id;
    const postObj = {
      title: title,
      summary: summary,
      body: articleBody,
      author: _id,
      likes: 0,
      thumbnailURL: "",
      tags: category.length !== 0 ? category.split(",") : [],
      comments: [],
    };

    if (file) {
      const { secure_url } = await cloudinaryUpload(file);
      postObj.thumbnailURL = secure_url;
    }

    let { data } = await axios.post("/user/article/post", postObj);

    if (data.error) {
      return rejectWithValue({ data, toastId });
    }
    return { data, toastId };
  }
);

export default postArticle;
