import getUser from "./getUser";
import logOut from "./logOut";
import postArticle from "./postArticle";
import deleteArticle from "./deleteArticle";
import likeArticle from "./likeArticle";
import unlikeArticle from "./unlikeArticle";
import getPost from "./getPost";
import getAllPosts from "./getAllPosts";
import addToReadingList from "./addToReadingList";
import removeFromReadingList from "./removeFromReadingList";

const Thunks = {
  getUser,
  logOut,
  getPost,
  getAllPosts,
  postArticle,
  deleteArticle,
  likeArticle,
  unlikeArticle,
  addToReadingList,
  removeFromReadingList,
};

export default Thunks;
