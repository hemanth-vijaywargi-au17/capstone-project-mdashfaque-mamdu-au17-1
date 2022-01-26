import { toast } from "react-toastify";

const follow = {
  fulfilled: (state, action) => {
    const { id, name } = action.payload;
    state.user.following.push(id);
    state.allUsers[id].followers.push(state.user._id)
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
