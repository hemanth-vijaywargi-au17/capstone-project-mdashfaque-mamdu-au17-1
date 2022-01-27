import { toast } from "react-toastify";

const addComment = {
  fulfilled: (state, action) => {
    const { commentObj, post_id } = action.payload;
    state.allPosts[post_id].comments.push(commentObj);
    toast.success("Comment Added !", {
      isLoading: false,
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  },
  rejected: (state, action) => {
    toast.error("Operation Failed!", {
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

export default addComment;
