import { toast } from "react-toastify";

const deleteArticle = {
  fulfilled: (state, action) => {
    const { data, toastId } = action.payload;
    state.user.createdPosts = state.user.createdPosts.filter(
      (obj) => obj._id !== data.post_id
    );
    delete state.allPosts[data.post_id];
    toast.update(toastId, {
      render: "Post Deleted Successfully!",
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
      render: "Operation Failed!",
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

export default deleteArticle;
