import { toast } from "react-toastify";

const unfollow = {
  fulfilled: (state, action) => {
    const { id, name } = action.payload;
    state.user.following = state.user.following.filter((user_id) => user_id !== id);
    Object.keys(state.allPosts).forEach((key) => {
      let post = state.allPosts[key];
      if (post.author._id === id) {
        post.author.followers.filter((user_id) => user_id !== id);
      }
    });
    toast.success(`You unfollowed ${name}.`, {
      isLoading: false,
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      hideProgressBar: true,
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

export default unfollow;
