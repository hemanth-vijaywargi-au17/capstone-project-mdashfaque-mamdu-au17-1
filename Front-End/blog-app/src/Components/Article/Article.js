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
import CommentSection from "../CommentSection";

const Article = () => {
  const { id } = useParams();

  const article = useSelector((state) => state.app.allPosts[id]);
  const author = useSelector((state) =>
    article ? state.app.allUsers[article.author] : null
  );
  const {
    isLoading,
    error,
    user: currentUser,
  } = useSelector((state) => state.app);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actions.getPost(id));
    return () => {
      dispatch(actions.clearError());
    };
  }, []);

  const handleDelete = () => {
    dispatch(actions.deleteArticle(id));
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 leading-7">
      {article && author ? (
        <div className="w-full md:w-11/12 lg:w-9/12 xl:w-7/12">
          <p className="bg-gray-100 rounded-lg p-1 px-2 w-fit text-base text-gray-600">
            {article.tags.length !== 0 ? article.tags[0] : null}
          </p>
          <h1 className="">{article.title}</h1>
          <p className="">{article.summary}</p>

          <div className="flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center gap-4 py-4">
            <div className="flex items-center gap-2 w-fit">
              <img
                src={author.profilePicURL}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm font-semibold capitalize">
                {author.name}
              </div>
              {author._id !== currentUser._id ? (
                <FollowButton
                  isFollowing={currentUser.following.includes(author._id)}
                  follow={() => {
                    dispatch(
                      actions.follow({
                        followee_id: author._id,
                        name: author.name,
                      })
                    );
                  }}
                  unfollow={() => {
                    dispatch(
                      actions.unfollow({
                        followee_id: author._id,
                        name: author.name,
                      })
                    );
                  }}
                  followers={author.followers.length}
                />
              ) : null}
            </div>

            <div className="text-sm text-gray-600 flex gap-2 items-center border-none lg:border-2 lg:border-y-0 lg:border-r-0 lg:pl-2 border-gray-300 lg:border-solid">
              <div className="bg-gray-100 rounded-lg p-1 px-2 text-sm">
                {new Date(article.updatedAt).toLocaleDateString(undefined, {
                  month: "short",
                })}{" "}
                {new Date(article.updatedAt).getDate()},{" "}
                {new Date(article.updatedAt).getFullYear()}
              </div>
              <div className="bg-gray-100 rounded-lg p-1 px-2">
                {article.tags.length !== 0 ? article.tags[0] : null}
              </div>
              {currentUser._id === article.author._id ? (
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
                isLiked={currentUser.likedPosts.includes(id)}
                like={() => {
                  dispatch(actions.likeArticle(id));
                }}
                unlike={() => {
                  dispatch(actions.unlikeArticle(id));
                }}
                likes={article.likes}
              />
              <ReadingListButton
                inList={currentUser.readingList.includes(article._id)}
                add={() => {
                  dispatch(actions.addToReadingList(article._id));
                }}
                remove={() => {
                  dispatch(actions.removeFromReadingList(article._id));
                }}
                label={true}
              />
              {currentUser._id === author._id ? (
                <DropDownMenu
                  menuButton={
                    <BsThreeDotsVertical
                      className="cursor-pointer p-1 shadow"
                      size={"1.3rem"}
                    />
                  }
                >
                  <div
                    onClick={() => {
                      handleDelete();
                      navigate("/");
                    }}
                    className="cursor-pointer hover:bg-gray-200 p-2"
                  >
                    Delete
                  </div>
                </DropDownMenu>
              ) : null}
            </div>
          </div>

          <img
            src={article.thumbnailURL}
            alt={""}
            className="w-full border-2 border-gray-200 border-x-0 border-solid"
          />

          <Blocks data={article.body} renderers={renderers} />
          <CommentSection comments={article.comments} post_author={author} post_id={id}/>
        </div>
      ) : isLoading ? (
        <h2 className="loading-component pulsate-bck">Loading...</h2>
      ) : error ? (
        "Sorry, this article does not exist or It was removed by the author."
      ) : null}
    </div>
  );
};

export default Article;
