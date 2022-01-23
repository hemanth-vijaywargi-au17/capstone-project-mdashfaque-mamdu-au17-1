import { toast } from "react-toastify";

const getUser = {
  fulfilled: (state, action) => {
    state.user = action.payload.user;
    toast.success("Sign In Successful", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  rejected: (state, action) => {},
  pending: (state, action) => {},
};

export default getUser;
