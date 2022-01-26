import { toast } from "react-toastify";

const unfollow = {
  fulfilled: (state, action) => {
    const { id, name } = action.payload;
    state.user.following = state.user.following.filter(
      (user_id) => user_id !== id
    );
    state.allUsers[id].followers = state.allUsers[id].followers.filter((follower_id)=>{
      return follower_id !== state.user._id
    })
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
