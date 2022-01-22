import getUser from "./getUser";
import logOut from "./logOut";
import postArticle from "./postArticle";
import deleteArticle from "./deleteArticle";
import likeArticle from "./likeArticle";
import unlikeArticle from "./unlikeArticle";

const userThunks = {
  getUser,
  logOut,
  postArticle,
  deleteArticle,
  likeArticle,
  unlikeArticle,
};

export default userThunks;
