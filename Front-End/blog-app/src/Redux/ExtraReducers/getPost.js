const getPost = {
  fulfilled: (state, action) => {
    state.currentPost = action.payload;
    state.isLoading = false;
    state.error = "";
    state.allPosts[action.payload._id] = action.payload;
  },
  rejected: (state, action) => {
    state.isLoading = false;
    state.error =
      "Sorry, this article does not exist or It was removed by the author.";
  },
  pending: (state, action) => {
    state.isLoading = true;
  },
};

export default getPost;
