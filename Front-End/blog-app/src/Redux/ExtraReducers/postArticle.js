import { toast } from "react-toastify";

const postArticle = {
  fulfilled: (state, action) => {
    const { data, toastId } = action.payload;
    state.user.createdPosts.push(data._id);
    state.allPosts[data._id] = data;
    toast.update(toastId, {
      render: "Posted Successfully!",
      type: "success",
      isLoading: false,
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      hideProgressBar: true,
    });
  },
  rejected: (state, action) => {
    const { toastId } = action.payload;
    toast.update(toastId, {
      render: "Posting Failed!",
      type: "error",
      isLoading: false,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  },
  pending: (state, action) => {},
};

export default postArticle;
