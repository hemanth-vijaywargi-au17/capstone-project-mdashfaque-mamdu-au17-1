import { toast } from "react-toastify";

const addToReadingList = {
  fulfilled: (state, action) => {
    const post_id = action.payload;
    state.user.readingList.push(post_id);
    toast.success("Added to the Reading List!",{
      isLoading: false,
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      hideProgressBar: true,
    });
  },
  rejected: (state, action) => {
    toast.error("Operation Failed!",{
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

export default addToReadingList;
