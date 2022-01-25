// React
import { useEffect } from "react";
// React EditorJS
import Blocks from "editorjs-blocks-react-renderer";
import renderers from "./renderers";
// React Router
import { useNavigate, useParams } from "react-router-dom";
// React Redux
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux";
// Components
import LikeButton from "../Buttons/LikeButton";
import ReadingListButton from "../Buttons/ReadingListButton";
import FollowButton from "../Buttons/FollowButton";
import DropDownMenu from "../DropDownMenu";
// css
import "./article.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const config = {
  image: {
    className: "",
  },
};

const Article = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    user: { _id: user_id, likedPosts, readingList, following },
  } = useSelector((state) => state.app);
  const article = useSelector((state) => {
    return state.app.allPosts[id];
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actions.getPost(id));
  }, []);

  const handleDelete = () => {
    dispatch(actions.deleteArticle(id));
  };

  return (
    <>
      {article ? (
        <div className="w-full flex justify-center article-container">
          <div className="md:w-1/2 mx-8 md:mx-0">
            <h1>{article.title}</h1>
            <div className="article-summary">{article.summary}</div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src={article.author.profilePicURL}
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <div className="text-sm font-semibold">{article.author.name}</div>
              {article.author._id !== user_id ? (
                <FollowButton
                  isFollowing={following.includes(article.author._id)}
                  follow={() => {
                    dispatch(
                      actions.follow({
                        followee_id: article.author._id,
                        name: article.author.name,
                      })
                    );
                  }}
                  unfollow={() => {
                    dispatch(
                      actions.unfollow({
                        followee_id: article.author._id,
                        name: article.author.name,
                      })
                    );
                  }}
                />
              ) : null}
            </div>
            <div className="text-sm text-gray-600 flex gap-2 items-center mb-6">
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

              <LikeButton
                isLiked={likedPosts.includes(id)}
                like={() => {
                  dispatch(actions.likeArticle(id));
                }}
                unlike={() => {
                  dispatch(actions.unlikeArticle(id));
                }}
                likes={article.likes}
              />
              <ReadingListButton
                inList={readingList.includes(article._id)}
                add={() => {
                  dispatch(actions.addToReadingList(article._id));
                }}
                remove={() => {
                  dispatch(actions.removeFromReadingList(article._id));
                }}
              />

              <DropDownMenu
                menuButton={
                  <BsThreeDotsVertical
                    className="cursor-pointer p-1 shadow"
                    size={"1.3rem"}
                  />
                }
              >
                {user_id === article.author._id ? (
                  <div
                    onClick={() => {
                      handleDelete();
                      navigate("/");
                    }}
                    className="cursor-pointer hover:bg-gray-200 p-2"
                  >
                    Delete
                  </div>
                ) : null}
              </DropDownMenu>
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
