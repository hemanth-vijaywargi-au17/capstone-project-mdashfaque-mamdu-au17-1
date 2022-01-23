import getUser from "./getUser";
import logOut from "./logOut";
import postArticle from "./postArticle";
import deleteArticle from "./deleteArticle";
import likeArticle from "./likeArticle";
import unlikeArticle from "./unlikeArticle";
import getPost from "./getPost";
import getAllPosts from "./getAllPosts";

const Thunks = {
  getUser,
  logOut,
  getPost,
  getAllPosts,
  postArticle,
  deleteArticle,
  likeArticle,
  unlikeArticle,
};

export default Thunks;
