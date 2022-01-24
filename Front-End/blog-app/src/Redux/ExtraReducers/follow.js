import { toast } from "react-toastify";

const follow = {
  fulfilled: (state, action) => {
    const { id, name } = action.payload;
    state.user.following.push(id);
    Object.keys(state.allPosts).forEach((key) => {
      let post = state.allPosts[key];
      if (post.author._id === id) {
        post.author.followers.push(id);
      }
    });
    toast.success(`You followed ${name}.`, {
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

export default follow;
