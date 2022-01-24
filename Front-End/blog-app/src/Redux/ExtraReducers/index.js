import postArticle from "./postArticle";
import deleteArticle from "./deleteArticle";
import logOut from "./logOut";
import getUser from "./getUser";
import getPost from "./getPost";
import addToReadingList from "./addToReadingList";
import removeFromReadingList from "./removeFromReadingList";

const ExtraReducers = {
  postArticle,
  deleteArticle,
  logOut,
  getUser,
  getPost,
  addToReadingList,
  removeFromReadingList,
};

export default ExtraReducers;
