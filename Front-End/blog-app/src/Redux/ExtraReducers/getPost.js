const getPost = {
  fulfilled: (state, action) => {
    state.currentPost = action.payload;
    state.isLoading = false;
    state.error = false;
    state.allPosts[action.payload._id] = action.payload;
  },
  rejected: (state, action) => {
    state.isLoading = false;
    state.error = true;
  },
  pending: (state, action) => {
    state.isLoading = true;
  },
};

export default getPost;
