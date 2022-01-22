// React
import { useEffect } from "react";
// React EditorJS
import Blocks from "editorjs-blocks-react-renderer";
import renderers from "./renderers";
// React Router
import { useNavigate, useParams } from "react-router-dom";
// React Redux
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../Redux/Slices/app";
import { userActions } from "../../Redux/Slices/user";
// Components
import LikeButton from "../Buttons/LikeButton";

const config = {
  image: {
    className: "",
  },
};

const Article = () => {
  const { id } = useParams();
  const {
    currentPost: article,
    isLoading,
    error,
  } = useSelector((state) => state.app);
  const { _id: user_id, likedPosts } = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(appActions.getPost(id));
  }, []);

  const handleDelete = () => {
    dispatch(userActions.deleteArticle(id));
  };

  return (
    <>
      {article ? (
        <div className="w-full flex justify-center">
          <div className="md:w-1/2 mx-8 md:mx-0">
            <h1>{article.title}</h1>
            <div>{article.summary}</div>
            <div className="flex items-center gap-2">
              <img
                src={article.author.profilePicURL}
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <div className="text-sm font-semibold">{article.author.name}</div>
              <div className="text-sm text-gray-600 flex gap-2 items-center">
                <div className="bg-gray-100 rounded-lg p-1 px-2">
                  {new Date(article.updatedAt).toLocaleDateString(undefined, {
                    month: "short",
                  })}{" "}
                  {new Date(article.updatedAt).getDate()},{" "}
                  {new Date(article.updatedAt).getFullYear()}
                </div>
                <div className="bg-gray-100 rounded-lg p-1 px-2">
                  {article.tags.length !== 0 ? article.tags[0] : null}
                </div>
                {user_id === article.author._id ? (
                  <div
                    className="rounded-lg p-1 px-2 cursor-pointer bg-red-400"
                    onClick={() => {
                      handleDelete();
                      navigate("/");
                    }}
                  >
                    Delete
                  </div>
                ) : null}
                <LikeButton
                  isLiked={likedPosts.includes(id)}
                  like={() => {
                    dispatch(userActions.likeArticle(id));
                  }}
                  unlike={() => {
                    dispatch(userActions.unlikeArticle(id));
                  }}
                />
                <div>{article.likes}</div>
              </div>
            </div>

            <div>
              <img src={article.thumbnailURL} alt={""} />
            </div>

            <div></div>
            <Blocks data={article.body} renderers={renderers} config={config} />
          </div>
        </div>
      ) : isLoading ? (
        "...Loading"
      ) : error ? (
        error
      ) : null}
    </>
  );
};

export default Article;
