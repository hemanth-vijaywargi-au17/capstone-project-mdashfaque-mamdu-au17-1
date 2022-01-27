import postArticle from "./postArticle";
import deleteArticle from "./deleteArticle";
import logOut from "./logOut";
import getUser from "./getUser";
import getPost from "./getPost";
import addToReadingList from "./addToReadingList";
import removeFromReadingList from "./removeFromReadingList";
import follow from "./follow";
import unfollow from "./unfollow";
import addComment from './addComment'
import removeComment from './removeComment'

const ExtraReducers = {
  postArticle,
  deleteArticle,
  logOut,
  getUser,
  getPost,
  addToReadingList,
  removeFromReadingList,
  follow,
  unfollow,
  addComment,
  removeComment,
};

export default ExtraReducers;
