import { toast } from "react-toastify";

const removeComment = {
  fulfilled: (state, action) => {
    const { comment_id, post_id } = action.payload;
    state.allPosts[post_id].comments = state.allPosts[post_id].comments.filter(
      (comment) => {
        return comment._id !== comment_id;
      }
    );
    toast.success("Comment Removed !", {
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

export default removeComment;
