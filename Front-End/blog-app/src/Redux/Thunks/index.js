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
import follow from './follow'
import unfollow from './unfollow'
import getAllUsers from './getAllUsers'

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
  follow,
  unfollow,
  getAllUsers,
};

export default Thunks;
