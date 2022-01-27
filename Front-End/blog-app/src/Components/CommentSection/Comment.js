import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import DropDownMenu from "../DropDownMenu";
import LikeButton from "../Buttons/LikeButton";
// const CommentSchema = Schema(
//     {
//       body: { type: Schema.Types.String, required: true },
//       author_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
//       likes: { type: Schema.Types.Number, required: true },
//       replies: { type: [Schema.Types.ObjectId], ref: "Comment" },
//       post_id: { type: [Schema.Types.ObjectId], ref: "Post" },
//     },
//     { timestamps: true }
//   );
function Comment(props) {
  const { body, author_id, likes, replies, post_id, post_author_id, remove } =
    props;
  const author = useSelector((state) => {
    return state.app.allUsers[author_id];
  });
  const user_id = useSelector((state) => {
    return state.app.user._id;
  });
  return (
    <div className="flex gap-2 border-2 border-solid border-x-0 border-t-0 border-gray-300">
      <img src={author.profilePicURL} alt="" className="w-10 h-10 rounded-lg" />

      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold capitalize">
          {author.name}{" "}
          <span
            style={{
              display: author_id === post_author_id ? "inline" : "none",
            }}
            className="font-bold text-blue-600 ml-2"
          >
            OP
          </span>
        </div>

        <div>{body}</div>

        <div className="flex gap-4 items-center my-2">
          <LikeButton
            like={() => {}}
            unlike={() => {}}
            isLiked={false}
            likes={likes}
          />
          <button className="article-btn">Reply</button>
          {author_id === user_id ? (
            <DropDownMenu
              menuButton={
                <BsThreeDotsVertical
                  className="cursor-pointer p-1 shadow"
                  size={"1rem"}
                />
              }
            >
              <div
                onClick={remove}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                Delete
              </div>
            </DropDownMenu>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Comment;
