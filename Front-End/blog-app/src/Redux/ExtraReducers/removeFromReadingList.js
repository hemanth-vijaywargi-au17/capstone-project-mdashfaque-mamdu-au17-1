import { toast } from "react-toastify";

const addToReadingList = {
  fulfilled: (state, action) => {
    state.user.readingList = state.user.readingList.filter(
      (post_id) => post_id !== action.payload
    );
    toast.success("Removed from the Reading List!",{
      isLoading: false,
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      hideProgressBar: true,
    });
  },
  rejected: (state, action) => {
    toast.error("Operation Failed!",{
      isLoading: false,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  },
  pending: (state, action) => {},
};

export default addToReadingList;
